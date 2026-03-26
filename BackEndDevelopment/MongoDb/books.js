// schema validation
const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 20,
    },
    author: String,
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

// 1st book inserted
// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });

// 2nd book inserted
// let book1 = new Book({
//     title: "Marvel Comics V2",
//     price: 600,
//     genre: ["comics", "superheroes", "fiction"],
// });

// book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

Book.findByIdAndUpdate("69c52efcc20699ea642bec52", {price: -100}, {runValidators: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// schema validations - Handling Errors
// console.log(err.errors.category.properties.message);