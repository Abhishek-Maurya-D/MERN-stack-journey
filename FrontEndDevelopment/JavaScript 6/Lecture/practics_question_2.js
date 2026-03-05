// Create a function to roll a dice & always display the value of the dice (1 to 6). 

function roll(){
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}

roll();
roll();