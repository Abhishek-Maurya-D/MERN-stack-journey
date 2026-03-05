// check if all numbers in our array are multiples of 10 or not 

let nums = [10, 20, 30, 40]
let ans = nums.every((el) => el % 10 == 0)

console.log(ans);



// create a function to find the minimum number in an array

let min = nums.reduce((min, el) => {
    if(min < el){
        return min;
    } else {
        return el;
    }
})
console.log(min);