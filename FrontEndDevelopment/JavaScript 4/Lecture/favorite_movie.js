let favorite_movie = "Avatar";
let guess = prompt("Enter the favourate Movie name")

while ((guess != favorite_movie) && (guess != 'quit')){
    console.log("Wrong");
    guess = prompt("Enter again: ")
}

if (guess == favorite_movie){
    console.log("Conguratulations, you guess correctly")
} else {
    console.log("Try next time");
}