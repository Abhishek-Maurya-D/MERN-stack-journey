// Used to store keyed collection & complex entities. 
// property => (key, value) pair 
// objects are a collection of properties 

const student = {
    name: "Abhishek",
    age: 23,
    marks: 94.4,
    city: "Noida"
}

console.log(student)


const item = {
    price: 100.99,
    discount: 50,
    color: ["red", "yellow"]
}



// create an object literal for the properties of thread/twitter post which includes
// username, content, likes, reposts, tags

const post = {
    username: "@abhishekMaurya",
    content: "This is my #firstpost",
    likes: 34
}


// get values
student["name"] // Abhishek
student.name // Abhishek



// ------------
let prop = "likes";
post[prop]; // 34
post.prop // undefined




// JS -> automatically converts objects keys to strings
// Even if we made the number as a key, the number will be converted to string. 

const obj = {
    1: "a", 
    2: "b",
    true: "c", 
    null: "d",
    undefined: "e"
}
obj[1] // 'a' here 1-> got converted to string first and then its value is retrived from the object.
// obj.1 // error 1-> treated as a number
obj.null // 'd'




// Add / Update value 
student[city] = "Delhi"; // only at run time
student.city = "Delhi"; // only at run time
 
student.loaction = "Sector - 93"

// delecte the property of the object
delete student.age;


// objects of objects 
// storing information of multiple students

const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
}



// array of objects
// storing information of multiple students

const classInfo = [
    {
        grede: "A+",
        city: "Noida"
    },
    {
        grade: "B",
        city: "Delhi"
    },
    {
        grade: "C",
        city: "Mumbai"
    }
]





// Maths Object 
// Properties 
Math.PI 
Math.E 

// Methods 
Math.abs(n)
Math.pow(a,b)
Math.floor(n)
Math.ceil(n)
Math.randow()



// Random Integers
let step1 = Math.random();
step1 = step1 * 10;
step1.Math.floor(step1);


// Math.floor(Math.random() * 10);

let random = Math.floor(Math.random() * 10) + 1;

