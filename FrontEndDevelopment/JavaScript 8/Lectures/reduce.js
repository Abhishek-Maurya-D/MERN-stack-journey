// reduces the array to a single value

// syntax
// arr.reduce(reducer function with 2 variables for (accumulator, element));
[1,2,3,4].reduce((res, el) => (rel+el));


let nums = [1,2,3,4];
let finalVal = nums.reduce((res, el) => res + el);
console.log(finalVal);