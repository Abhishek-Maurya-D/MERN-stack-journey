// allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args){
    return args.reduce((add, el) => add + el);
}


function sum(...args){
    // arguments
    for (let i=0; i<args.length; i++){
        console.log("You gave us: ", args[i]);
    }
}


// arguments
function min(a,b,c,d){
    console.log(arguments);
}

// Important
// will not work shows error --------------------------
function sum(){
    return arguments.reduce((sum, el) => sum + el);
}

// here args stores all the elements which are pass to it as an array
function sum(...args){
    return args.reduce((sum, el) => sum + el);
}

// 
function min(msgs, ...args){
    console.log(msgs);
    return args.reduce((min, el) => {
        if (min > el){
            return el;
        } else {
            return min;
        }
    });
}