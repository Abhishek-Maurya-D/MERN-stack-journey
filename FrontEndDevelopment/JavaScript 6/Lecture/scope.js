// Scope determines the accessibility of variables, objects, and functions from different parts 
// function, block, lexical 

// =====================
// variables defined inside a function are not accessible (visible) from outside the function 

let sum = 54; // Global Scope

function calSum(a,b){
    let sum = a+b; // function scope
    console.log(sum);
}
calSum(1,2);

// block scope
// variables declared inside a {} block cannot be accessed from outside the block. 
// let and const are block specific, but var is global scoping



// ===== Lexical Scope =====
// a variable defined outside a function can be accessible inside another function defined after the variable declaration 
// The opposite is not true 
// =========================
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        let a = 34;
        console.log(x);
    }
    innerFunc();
    console.log(a) // wrong due to block scope
}
// this is due to -> hoisting





// =========================
// Function Expressions
// syntax
// const variable = function(arg1, arg2...){
    // do or return something
// }
const Sum = function(a,b){
    return a+b;
}
Sum(2,3);








// ================
// Higher Order Functions ======
// A function that does one or both: 
// takes one or multiple functions as arguments 
// returns a function 
function multipleGreet(func, n){ // higher order function 
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello!");
}

multipleGreet(greet, 2);
multipleGreet(function(){console.log("Namaste")}, 1000);





// ==========================
function oddEvenFactory(request){
    if(request == "odd"){
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("Wrong Request");
    }
}
let request = "odd"; // even




// Methods -> Actions that can be performed on an object.
const calculator = {
    add(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
calculator.add(4,5);