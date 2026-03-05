// syntax 
// function definition (telling JS) --------
// function funcName(){
    // do something
// }
// function calling (using the function) ------
// funcName();


// example
function hello(){
    console.log("Hello!");
}


function isAdult(){
    let age = 13;
    if (age >= 18){
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}




// function with arguments
// values we pass to the function 
// syntax 
// function funcName(arg1, arg2...){
    // do something
// }
// example
function printInfo(name, age){
    console.log(`${name} is ${age} years old.`)
}

printInfo("Abhishek", 34);
printInfo("Amit");


// return -> keyword
// return keyword is used to return some value from the function 
// input -> function -> output 
// Syntax
// function funcName(arg1, arg2...){
    // do something
    // return val; 
// }

function sum(a,b){
    return a+b;
}

sum(sum(1,2),3);

