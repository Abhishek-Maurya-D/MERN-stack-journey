const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

// app.use((req, res) => {
//     console.log("request received");
//     // res.send("This is a basic response.");

//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// })

app.get("/", (req, res) => {
    res.send("You contacted root path.");
});

// ============ 1 ===============
// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path.");
// });

// app.get("/orange", (req, res) => {
//     res.send("You contacted orange path.");
// });

// app.post("/", (req, res)=> {
//     res.send("You sent a post request to root path.");
// });

// ================ 2 =====================

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    // res.send("Hello, I am Abhishek Maurya")
    const {username, id} = req.params;
    res.send(`welcome to the page of @${username}. Your ID is ${id}.`);
})


// ==== query string
app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("<h1> Nothing Searched </h1>");
    }
    res.send(`search results for query: ${q}`);
})





app.use((req, res) => {
    res.status(404).send("This path does not exist.");
});