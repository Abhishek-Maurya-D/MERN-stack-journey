// syntax 
// for (element of collection) {
    // do something
// }


let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(fruit of fruits){
    console.log(fruit);
}


for(char of "Abhishek Maurya"){
    console.log(char);
}



// nested for of loop

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for(list of heroes){
    for(name of list){
        console.log(name);
    }
}