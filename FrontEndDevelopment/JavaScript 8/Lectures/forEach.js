// for each
// syntax
// arr.forEach(some function definition or name);

let arr = [1,2,3,4,5];
arr.forEach(function(el) {
    console.log(el);
});

// OR
let print = function (el) {
    console.log(el);
}
arr.forEach(print);


// forEach for objects
let arr1 = [
    {
        name: "Abhishek Maurya",
        marks: 75
    },
    {
        name: "Amit Kumar",
        marks: 89
    },
    {
        name: "Arayadha Chauhan",
        marks: 56
    },
];

arr1.forEach((student) => {
    console.log(student.marks);
});