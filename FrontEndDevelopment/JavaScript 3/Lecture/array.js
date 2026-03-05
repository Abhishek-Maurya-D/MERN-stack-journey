// Array
// Linear collection of things 

let students = ["Abhishek", "Aman", "Ankit"];
let nums = [2,4,6,8]
console.log(nums[0]) // 2

let info = ["Abhishek", 21, 3]


// empty array
let newArr = [];
console.log(newArr.length);

info[0][0]    // A -> first character of output
info[0][4]    // s


// array's are mutable
let fruits =["mango", "orange", "banana"];
fruits[0] = "litchi";
console.log(fruits)
fruits[10] = "papaya";
console.log(fruits)
// ["mango", "orange", "banana", empty x 7, "papaya"]



// Methods
// 1 -> Push : add to end
// 2 -> Pop : delete from end & returns it
// 3 -> Unshift : add to start 
// 4 -> shift : delete from start & returns it

let cars = ["Audi", "XUV", "Maruti"];
cars.push("Toyota");
cars.push("Farrari");
console.log(cars);
cars.pop();


cars.unshift("toyota"); // returns the index where it got added
cars.shift(); // returns the deleted values too

// Methods
// 5 -> indexOf : returns index of something
// 6 -> search for a value

let primary = ["red", "yellow", "blue"];
primary.indexOf("green"); // -1
primary.indexOf("yellow"); // 1
primary.indexOf("Yellow"); // -1

primary.includes("yellow") // true
primary.includes("green") // false



// 7 -> concat : merge 2 arrays
// 8 -> reverse : reverse an array
let secondary = ["orange", "green", "violet"];
primary.concat(secondary);
// ["red", "yellow", "blue", "orange", "green", "violet"]
primary.reverse();
["blue", "yellow", "red"]




// 9 -> slice : copies a portion of an array
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
colors.slice()
// ["red", "yellow", "blue", "orange", "pink", "white"]
colors.slice(2)
// ["blue", "orange", "pink", "white"]
colors.slice(2,3)
// ["blue"]
colors.slice(-2)
// ["pink", "white"]


// 10 -> splice : removes | replaces | add elements in place
// splice(start, deleteCount, item0...itemN)
colors.splice(4);
// ["pink", "white"];
// it means now 
colors // now
// ["red", "yellow", "blue", "orange"]
colors.splice(0,1);
// ["red"];
colors // now
// ["red", "blue", "orange"]
colors.splice(0,1,"black", "grey");
// ["yellow"]
colors // now
// ["black", "grey", "blue", "orange"];


// 11 -> sort : sorts an array
let days = ["Monday", "Sunday", "Wednesday", "Tuesday"];
days.sort();
// ["Monday", "Sunday", "Tuesday", "Wednesday"]

// array -> reference
// 'name' == 'name' // true
// 'name' === 'name' // true
// [1] === [1] // false
// means both are different

// [1] == [1] // false
// means both are different

// [] == [] // false
// [] === [] // false

// always compairs the address of the array 
// each array is having different address 

let arr = ['a', 'b'];
let arrCopy = arr;
arrCopy; // ['a', 'b']
arrCopy.push('c');
arr; // ['a', 'b', 'c']

arr = arrCopy // true


// constant arrays
const arr = [1,2,3];
arr.push(4); // 4
arr; // [1,2,3,4]
arr.pop(); // 4
arr; // [1,2,3]
arr = [1,2,3] // error assignment to the constant one 



// Nested arrays -> array of array
let nums = [[2,4], [3,6], [7,8]]
nums.length // 3
nums[0] // [2,4]
// array[row][column]
