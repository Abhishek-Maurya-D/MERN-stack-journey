// for the given start state of an array, change it to final form using methods 

let start = ['January', 'July', 'March', 'August'];
// final = ['July', 'June', 'March', 'August'];

start[0] = start[1];
start[1] = "June"
console.log(start);

// can be performed by using shift and unshift