// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("Hello ", i);
// }

// =================== argv
// let args = process.argv;
// for (let i=2; i<argv.length; i++){
//     console.log("Hello & Welcome to ", argv[i]);
// }
// console.log(process.argv);


// ================= module.exports
// const someValue = require("./math");

// console.log(someValue);


// =========================
const math = require("./exportsFiles");
console.log(math.sum(2,2));
console.log(math.PI);