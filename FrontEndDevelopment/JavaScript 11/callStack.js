// call stack
function hello(){
    console.log("Inside hello fnx");
    console.log("Hello");
}

function demo() {
    console.log("Calling hello fnx");
    hello();
}

console.log("Calling Demo fnx");
demo();
console.log("Done, bye!");


// visualising call stack
function one() {
    return 1;
}

function two(){
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();