// spread
// expands an iterable into multiple values

// syntax
// function func (... arr){
    // do something
// }

let arr = [1,3,5,7,8,4,3,6,8,3,2,6,4,7,8,4,3,2,1,3];
Math.min(...arr);


// with array literals
let arr1 = [1,2,3,4,5];
let newArr = [...arr];
console.log(newArr);

let chars = [..."Hello!"];
console.log(chars);

// combining two different arrays
let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let nums = [...odd, ...even];




// spread with object literals
let data = {
    email: "abhishekworkit@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id: 123};

// array to object conversion
// arr -> objects = Here, index is from 0 to so on...
let obj1 = {...arr}; // obj -> key:val