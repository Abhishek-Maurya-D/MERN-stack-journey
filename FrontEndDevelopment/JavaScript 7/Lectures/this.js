// "This" keyword refers to an object that is executing the current piece of code 
const student = {
    name: "Abhishek",
    age: 21,
    eng: 81,
    math: 87,
    science: 88,
    getAvg(){
        let avg = (this.eng + this.math + this.science) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}

// getAvg() -> call window object
// window is the initial object
// alert("Hello!") == window.alert("Hello!");
// 