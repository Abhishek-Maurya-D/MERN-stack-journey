const express = require("express");
const app = express();

// app.use(middleware)

// app.use(() => {
//     console.log("Hi, I am Abhishek Maurya");
// })

// app.use((req, res) => {
//     // let {query} = req.query;
//     // console.log(query);
//     console.log("Hi, I am Abhishek Maurya");
//     res.send("Middleware finished successfully");
// })

// app.use((req, res, next) => {
//     console.log("Hi, I am Abhishek Maurya");
//     next();
//     console.log("This is after next()");
// })

// Utility Middleware
// logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if (token === "giveaccess"){
//         next();
//     }
//     res.send("Access Denied");
// })

// app.get("/api", (req, res) => {
//     res.send("data");
// })

// multiple middleware
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    res.send("Access Denied");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/random", (req, res, next) => {
    console.log("I am only for random.");
    next();
})

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
})

app.get("/random", (req, res) => {
    res.send("This is a ramdom page");
})

// 404
// app.use((req, res) => {
//     res.status(404).send("Page not found!");
// })

app.listen(8080, () => {
    console.log("Server listening to port 8080");
})