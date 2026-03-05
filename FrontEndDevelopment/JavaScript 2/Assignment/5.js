let num1 = 93;
let num2 = 45;
let num3 = 65;

if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is the largest number.`)
    } else {
        console.log(`${num3} is the largest number`)
    }
} else{
    if(num2 > num3){
        console.log(`${num2} is the largest number`)
    } else {
        console.log(`${num3} is the largest number`)
    }
}