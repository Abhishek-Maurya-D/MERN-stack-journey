// 1
// write a JS program to delete all occurrences of element 'num' in a given array. 

let arr = [1,2,3,4,5,6,2,3];
let num = 2;
// result, arr = [1,3,4,5,6,3];

for(let i=0; i<arr.length; i++){
    if(arr[i] === 2){
        arr.splice(i,1);
    }
}

console.log(arr);



// 2
// count the no of digits in a number
// --- self solution ---
// let number = 287152;
// let size = 0;
// while(true){
//     if(number == 0){
//         console.log(1);
//         break;
//     }
//     if(number%10 >= 0){
//         size++;
//         number = number/10;
//     } else {
//         console.log(size);
//         break;
//     }
// }
let number = 287152;
let size = 0;

if (number === 0) {
    size = 1;
} else {
    while (number > 0) {
        size++;
        number = Math.floor(number / 10);
    }
}

console.log(size);

number = 287152;
let sum = 0;
while(number > 0){
    sum = sum + number%10;
    number = Math.floor(number/10);
}
console.log("Sum is ", sum);



num = 7;
fact = 1;
while(num > 0){
    fact = fact * num;
    num = num - 1;
}
console.log("factorial is ",fact);


let largestNumber = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i] > largestNumber){
        largestNumber = arr[i];
    }
}
console.log("Largest Number is : ", largestNumber)