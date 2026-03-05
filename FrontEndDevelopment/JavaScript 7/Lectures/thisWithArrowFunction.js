// Very Important
// For functions -> the scope of "this" is calling object
// For arrow -> the scope of "this" is lexical means the scope of its parent's which has called it

const student = {
    name: "Abhishek Maurya",
    marks: 95,
    prop: this, // global scope
    getName: function(){
        console.log(this);
        return this.name;
    },

    // disadvantage of this keyword
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },

    // advantage
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); // student object
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function () {
            console.log(this); // window object
        }, 2000);
    }
}



const a = 5; // global scope