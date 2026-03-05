// 1.
// square and sum the array elements using the arrow function and then find the average of the arrary 


let arr = [1,3,5,7];
const sq_sum = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + (arr[i]*arr[i]);
    };
    let avg = sum/(arr.length);
    console.log("Average is : ", avg);
}


// other way of doing -- same thing
const avg = arr.reduce((sum, n) => sum + n*n, 0) / arr.length;
console.log("Average is :", avg);



// 2.
// create a new array using the map function whose each element is equal to the original element plus 5.

const fiveAddedFunction = arr.map(el => el + 5);


// 3.
// create a new array whose elements are in uppercase of words present in the original array. 

let array = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
console.log(array.map((array) => array.toUpperCase()));


// 4.
// write a function called doubleAndReturnArgs which accepts an array and a 
// variable number of arguments. The function should return a new array with
// the original array values and all of the additional arguments doubled. 

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v*2),
]
console.log(doubleAndReturnArgs([3,5,8,9,1], 33, 65, 23, 78));


// 5.
// write a function called mergeObjects that accepts two objects and returns a new 
// object which contains all the keys and values of the first object and second object. 

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));
