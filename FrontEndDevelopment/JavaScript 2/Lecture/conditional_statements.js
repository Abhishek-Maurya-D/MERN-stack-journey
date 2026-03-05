// if statements
let age = 23;
if (age>=18){
    console.log("You can vote");
}


// if else statements
age = 14;
if(age >= 18){
    console.log("You can vote.")
} else if(age >= 18){
    console.log("You can vote")
} else if(age < 18){
    console.log("You can't vote.");
} 

// grading system
let marks = 75
if(marks >= 80){
    console.log("A+")
} else if(marks >=60 ){
    console.log("B+")
} else if(marks >= 33){
    console.log("C+")
} else if (marks < 33){
    console.log("F")
}



// else statement 
let age = 18;
if (age >= 18){
    console.log("You can vote");
} else {
    console.log("You can't vote")
}



// nested if else
let marks = 45;

if(marks >= 30){
    if(marks >= 80){
        console.log("O")
    }
    else {
        console.log("P")
    }
} else {
    console.log("F")
}
    