// details of error are in MongoDB Express folder look for that 

const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// expresserror checking 
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/random", (req, res, next) => {
    console.log("I am only for random.");
    next();
})

// next() different cases
app.get("/err", (req, res) => {
    abcd = abcd;
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
})

app.use((err, req, res, next) => {
    console.log("----- ERROR -----");
    next(err);
})

app.use((err, req, res, next) => {
    console.log("----- ERROR 2 Middleware -----");
    next(err);
})

app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server listening to port 8080");
})