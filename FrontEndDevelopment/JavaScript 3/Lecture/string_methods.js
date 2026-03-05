// methods - actions that can be performed on objects.
// Strings are immutable
// formate 
// stringName.method()

// 1
// str.trim() 
// whitespaces from both ends of string & return new string

let name = "       Aman             "
console.log(name)

name.trim() //       Aman             
console.log(name) //       Aman             
console.log(name.trim()) // Aman


// 2
// str.toUpperCase()
// str.toLowerCase()

let str = "Abhishek Maurya";
let cap_str = str.toUpperCase();
let low_str = str.toLowerCase();




//3
// string methods with arguments
// argument is a some value that we pass to the method 

// indexOf -> returns the first index of occurrence of some vlaue in string. or gives -1 if not found. 
let str = "I love coding"
console.log("str.indexOf("love")");





// 4
// multiple method -> combined to or more methods

let name = "          Abhishek          ";
console.log(name.toLowerCase().trim())




// 5
// slice 
// returns a part of the original string as a new string 

let str = "IloveCoding";
str.slice(5) //Codding
str.slice(1,4) //love
str.slice(-num) = str.slice(length-num)

str.slice(-3) //ing




// 6
// replace 
// searches a value in the string & returns a new string with the value replaced. 

let msg = "IloveCoding"
msg.replace("love", "do");
msg = "apnaapnaapna";
msg.replace("apna", "college") // collegeapnaapna



// 7
// returns a string with the number of copies of a string 
let str = "Mango"
let newstr = str.repeat(3)




