// syntax
// let newArr = arr.filter(some function definition or name);

let nums = [1,2,3,4,5,65,7,6,78,5,445,3,4,6,6767,3,34,2,323]
let ans = nums.filter((el) => {
    return el % 2 == 0; // return only the even numbers
})