// the try statement allows you to define a block of code to be tested for errors while it is being executed. 

// the catch statement allows you to define a block of code to be executed, if an error occurs in the try block. 

console.log("Hello!")
try {
    console.log(a);
} catch(err) {
    console.log("Caught an error... a is not defined");
    console.log(err);
}
console.log("Hello!")
console.log("Hello!")
console.log("Hello!")