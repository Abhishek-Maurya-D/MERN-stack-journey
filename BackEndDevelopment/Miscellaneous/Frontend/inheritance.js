class Person{
    constructor(name, age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("Student class constructor");
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age); // parent class construtor is being called
        this.subject = subject;
    }
}

// Example
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark(){
        console.log("Wooff...");
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow(){
        console.log("meow...");
    }
}