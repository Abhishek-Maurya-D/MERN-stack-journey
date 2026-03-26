const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// for single data insertion

// const user2 = new User({
//     name: "Anuj",
//     email: "anuj@gmail.com",
//     age: 26,
// })

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// for multiple data entry
// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 23},
// ]).then((res) => {
//     console.log(res);
// });

// User.find({age: {$gt: 47}})
//     .then((res) => {
//         console.log(res[0].name);
// })
//     .catch((err) => {
//         console.log(err);
// })

// update - one
// User.updateOne({name: "Bruce"}, {age: 49})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// update - many
// User.updateMany({age: {$gt: 48}}, {age: 55})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// findOneAndUpdate
// User.findOneAndUpdate({name: "Bruce"}, {age: 35}, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// delete- one
// User.deleteOne({name: "Bruce"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// delete - many
// User.deleteMany({age: 55})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// delete by id
User.findByIdAndDelete("69c4f2ef15c219ab98e953e9")
    .then((res) => {
        console.log(res);
    });