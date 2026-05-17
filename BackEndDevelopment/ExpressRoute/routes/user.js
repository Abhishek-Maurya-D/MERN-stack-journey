const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
    res.send("Get for users");
})

// Show 
router.get("/:id", (req, res) => {
    res.send("Get for user id");
});

// Post
router.post("/", (req, res) => {
    res.send("Post for users");
})

// Delete 
router.delete("/:id", (req, res) => {
    res.send("Delete for user id");
})

module.exports = router;