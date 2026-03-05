// create a function that prints the multiplication table of a Number. 

function table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

table(53);