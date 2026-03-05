// Maps
// syntax
// let newArr = arr.map(some function definition or name);

let num = [1,2,3,4];

let double = num.map((el) => {
    return el * 2;
})


let students = [
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

let gpa = students.map((el) => {
    return el.marks/10;
});