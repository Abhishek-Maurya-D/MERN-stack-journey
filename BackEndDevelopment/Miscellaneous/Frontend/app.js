const stu1 = {
    name : "Abhishek Maurya",
    age : 21,
    marks : 85,
    getMarks : function() {
        return this.marks;
    }
};

const stu2 = {
    name : "Abhishek Maurya",
    age : 21,
    marks : 85,
    getMarks : function() {
        return this.marks;
    }
};

const stu3 = {
    name : "Abhishek Maurya",
    age : 21,
    marks : 85,
    getMarks : function() {
        return this.marks;
    }
};

let arr = [1,2,3]
arr.sayHello = () => {
    console.log("Hello!, I am arr");
}

// for checking prototype of an object 
// arr.__proto__

// prototype redefining
// arr.__proto__.push = (n) => {console.log("Pushing Number : ", n); }

// checking all string prototype
// String.prototype

// checking all array prototype
// Array.prototype

