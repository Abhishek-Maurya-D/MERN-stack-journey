// storing values of array into multiple variables

let names = ["Tony", "Bruce", "Peter", "Steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// rest concept -------------------
// let [winner, runnerup, secondRunnerup] = names;
let [winner, runnerup, ...secondRunnerup] = names;


// =============== Destructuring ======================
const student = {
    name: "Abhishek Maurya",
    age: 21,
    class: 16,
    subject: ["DWH", "Project"],
    username: "abhi@maurya",
    password: "abcd"
};

// normal method
// let username = student.username;
// let password = student.password;

// destructuring
let {username: user, password, city:location ="Mumbai"} = student;