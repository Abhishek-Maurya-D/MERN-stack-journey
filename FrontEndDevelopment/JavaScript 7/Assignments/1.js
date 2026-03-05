// 1 

const arrayAverage = (array) => {
    let avg = 0;
    for(let i=0; i<array.length; i++){
        avg = avg + array[i];
    }
    avg = avg/array.length;
    console.log("Average is : ",avg);
}

// 2

const isEven = (num) => {
    if(num%2 === 0){
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

// 3
// predict the output

// const object = {
//     message: "Hello, World!",
//     logMessage(){
//         console.log(this.message);
//     }
// };

// output of this
// setTimeout(object.logMessage, 1000);

// 4

let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback){
        callback();
    },
};
object.method(callback, 1, 2);