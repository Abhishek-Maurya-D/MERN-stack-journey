// 1.
let input = document.createElement("input");
document.querySelector("body").append(input);

let button = document.createElement("button");
button.innerText = "Click Me"
document.querySelector("body").append(button);

// 2.
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// 3. 
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// 4. 
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice"
h1.classList.add("underline");
h1.classList.add("color-purple");
document.querySelector("body").prepend(h1);

// 5. 
let text = "Delta Practice"
let p = document.createElement('p');
p.innerHTML = `Apna College <b>${text}</b>`;
document.querySelector("body").prepend(p);
