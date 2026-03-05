const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
// middleware
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("Hello");
});

// 1
app.get("/rolldice1", (req, res) => {
    res.render("rolldice1.ejs");
});

// 2
app.get("/rolldice2", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice2.ejs", {num : diceVal});
    res.render("rolldice2.ejs", {diceVal});
});

app.get("/ig/:username", (req, res) => {
    const followers = ["Adam", "Bob", "Steve"];
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {username, followers, data});
    } else {
        res.render("error.ejs");
    }
    // res.render("instagram.ejs", {data});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})