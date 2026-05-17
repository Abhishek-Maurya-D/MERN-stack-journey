const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("Connection successful")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// Index Route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    } catch (err) {
        next(err);
    }
})

// New Route 
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
})

// Create Route - 1
// app.post("/chats", (req, res) => {
//     let {from, to, msg} = req.body;
//     let newChat = new Chat({
//         from : from,
//         to: to,
//         msg: msg,
//         created_at: new Date(),
//     });
//     newChat
//         .save()
//         .then((res) => {
//             console.log("Chat was saved");
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     res.redirect("/chats");
// })

// Create Route - 2
app.post("/chats", (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });
        newChat.save();
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
})

// wrapAsync
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

// show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(404, "Chat Not found"));
    }
    res.render("edit.ejs", { chat });
}));

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }

})

// Update Route
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updateChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }

})

// Destroy Route
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deleteChat = await Chat.findByIdAndDelete(id);
        console.log(deleteChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }

});

app.get("/", (req, res) => {
    res.send("root is working");
});

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        console.log("This was a Validation Error. Please follow rules");
    }
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})