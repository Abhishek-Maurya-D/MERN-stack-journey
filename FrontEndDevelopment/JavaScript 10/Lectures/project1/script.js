// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


let btn = document.querySelector("#btn");
let box = document.querySelector("#colorBox");
let text = document.querySelector("#colorText");
let statusMsg = document.querySelector("#status");

/* ---------------- CLICK EVENT ---------------- */
btn.addEventListener("click", generateColor);

/* ---------------- HOVER EVENTS ---------------- */
btn.addEventListener("mouseover", function(){
    statusMsg.innerText = "Mouse over button 👆";
    btn.style.backgroundColor = "#444";
});

btn.addEventListener("mouseout", function(){
    statusMsg.innerText = "Mouse left button";
    btn.style.backgroundColor = "#222";
});

/* ---------------- DOUBLE CLICK EVENT ---------------- */
box.addEventListener("dblclick", function(){
    navigator.clipboard.writeText(text.innerText);
    statusMsg.innerText = "Color copied to clipboard ✔";
});

/* ---------------- KEYBOARD EVENT ---------------- */
document.addEventListener("keydown", function(e){
    if(e.code === "Space"){
        generateColor();
        statusMsg.innerText = "Generated using SPACE key ⌨";
    }
});

/* ---------------- MAIN FUNCTION ---------------- */
function generateColor(){
    let randomColor = getRandomColor();

    box.style.backgroundColor = randomColor;
    text.innerText = randomColor;
    statusMsg.innerText = "New color generated 🎨";
}

/* ---------------- COLOR FUNCTION ---------------- */
function getRandomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
}