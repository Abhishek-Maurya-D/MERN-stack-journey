// syntax
// for(initialisation; condition; updation){
    // do something
// }


for(let i=1; i<=6; i++){
    console.log(i);
}

// all odd numbers from (1 to 15)

for (let i = 1; i<=15; i++){
    if(i%2 != 0){
        console.log(i);
    }
}


// printing all even number (2 to 10) 
for (let i = 2; i<=10; i=i+2){
    console.log(i);
}




// infinite loops
// for(let i=1; i>=0; i++){

// }


// printing the multiplication table for ANY NUMBER

let num = prompt("Enter the number: ");
for(let i=1; i<=10; i++){
    console.log(`${num} X ${i} = ${num*i}`);
}


// nested for loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(i*j);
    }
}

// break 
let i = 1;
while(i<=5){
    if(i === 3){
        break;
    }
    console.log(i);
    i++;
}


// loops with arrays
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}



// nested loops with nested arrays
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for(let i=0; i<heroes.length; i++){
    console.log(`List ${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}