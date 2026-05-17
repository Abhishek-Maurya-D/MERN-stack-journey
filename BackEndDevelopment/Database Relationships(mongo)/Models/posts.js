const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// first time data save
// const addData = async () => {
//     let user1 = new User({
//         username: "Rahulkumar",
//         email: "rahul@gmail.com",
//     });
//     let post1 = new Post({
//         content: "Hello World",
//         likes: 7
//     });
//     post1.user = user1;
//     await user1.save();
//     await post1.save();
// }
// addData();

// second time data save
// const addData = async () => {
//     let user = await User.findOne({username: "Rahulkumar"});
//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 23,
//     });
//     post2.user = user;
//     await post2.save();
// };
// addData();

// just to delete some unneccessary data
// const del = async() => {
//     await Post.findByIdAndDelete("69e64912353e0550d65296ab");
//     await Post.findByIdAndDelete("69e649d968f0f8ff3fd5d5f3");
    // await User.findByIdAndDelete("69e64402d2707742d43c4744");
// }
// del();

// to extract the data from the database
const getData = async () => {
    let result = await Post.findOne({}).populate("user");
    console.log(result);
};
getData();
