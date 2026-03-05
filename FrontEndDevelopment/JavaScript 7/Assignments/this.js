// This works differently in different conditions like strict and non-strict mode
"use strict";

// 1. this in global space

console.log(this)  // globalObject -> window, global

// 2. this inside a function 

function x() {
    // the value depends on strict / non strict mode
    console.log(this);
}
x(); // window -> non-strict, undefined -> strict

// 3. this in strict mode - (this substitution)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non-strict mode

// 4. this keyword value depends on how function is called (window)
// strict mode -> analysis

x(); // undefined
window.x(); // window

// 5. this inside a object's method

const student = { // method
    name: "Karishma",
    printName: function () { // function
        console.log(this.name);
    }
}
student.printName(); // calling function method -> obj

// 6. call, apply, bind methods (sharing methods)

const student2 = {
    name: "Abhishek"
}

student.printName.call(student2);

// 7. this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    },
};
obj.x(); // window object

// 8. this inside method arrow function

const obj2 = { // method
    a: 10,
    x: function () { // function
        // enclosing lexical context
        console.log(this); // globalObject
        const Y = () => { // arrow function
            console.log(this); // globalObject
        };
        Y();
    },
};
obj2.x();

// this in DOM => reference to HTMLelements