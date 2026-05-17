const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection successful")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from: "Neha",
        to: "Priya",
        msg: "Send me your exam sheets",
        created_at: new Date() // UTC
    },
    {
        from: "Rohit",
        to: "Mohit",
        msg: "Teach me JS callbacks",
        created_at: new Date() // UTC
    },
    {
        from: "Amit",
        to: "Sumit",
        msg: "All the best!",
        created_at: new Date() // UTC
    },
    {
        from: "Anita",
        to: "Ramesh",
        msg: "Bring me some fruits",
        created_at: new Date() // UTC
    },
    {
        from: "Tony",
        to: "Peter",
        msg: "Love you 300",
        created_at: new Date() // UTC
    }
]

Chat.insertMany(allChats);