// 1.
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     alert("Button was clicked");
// };


// 2.
// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.onclick = sayHello;
//     btn.onclick = sayName;
//     btn.onmouseenter = function () {
//         console.log("you enter a button");
//     }
//     console.dir(btn);
// }

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Abhishek Maurya");
// }

// 3. 
// Event Listeners
// for (btn of btns){
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

// 4.
// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("Para was clicked");
// })

// 5.
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("Mouse inside div");
// })

// 6. -> THIS
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     // console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// p.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     // console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     // console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     // console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });


// ============== Other way
// function changeColor () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// h3.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);

// 7.
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// == keyboard events
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log("code = ", event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     console.log("KEY was pressed");
//     if(event.code == "ArrowUp"){
//         console.log("Character Moves forward");
//     } else if(event.code == "ArrowDown"){
//         console.log("Character Moves backward");
//     } else if(event.code == "ArrowLeft"){
//         console.log("Character Moves left");
//     } else if(event.code == "ArrowRight"){
//         console.log("Character Moves Right");
//     }
// })
 

// =========== Form Events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
//     // alert.log("Form Submitted");
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// change event ==============
let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("input changed");
//     console.log("final value = ", this.value);
// })

user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value = ", this.value);
})