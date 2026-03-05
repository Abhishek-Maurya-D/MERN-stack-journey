// for the given start of an array, change it to final form using splice 
let start = ["January", "July", "March", "August"]
// final = ["July", "June", "March", "August"]
start.splice(0,1);
start.splice(1,0,"June");
console.log(start);




// Return the index of the "javascript" from the given array, if it was reversed. 
let lang = ["c", "c++", "javascript", "python", "java", "c#", "sql"]
lang.reverse();
console.log(lang);
console.log(lang.indexOf("javascript"));