// 1 -> 
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(array, number){
    for(let i=0; i<array.length; i++){
        if(array[i] > num){
            console.log(array[i]);
        }
    }
}
getElements(arr, num);



// 2 ->
str = "abcdabcdefgggh"
function uniqueCharacters(string){
    let ans = "";
    for(let i=0; i<string.length; i++){
        if(ans.includes(string[i]) == false){
            ans = ans + string[i];
        }
    }
    console.log(ans);
}






// 3 ->
country = ["Australia", "Germany", "United States of America"]
function largestString(array){
    let str = array[0];
    for(let i=1; i<array.length; i++){
        if(str.length < array[i].length){
            str = array[i];
        }
    }
    console.log(str);
}




// 4 ->
string = "Abhishek Maurya";
function countVowels(string){
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' || string[i] == 'A' || string[i] == 'E' || string[i] == 'I' || string[i] == 'O' || string[i] == 'U'){
            count++;
        }
    }
    console.log(count);
}





// 5 ->
let start = 0;
let end = 10;
function generateNum(start, end){
    let diff = end - start;
    let num = Math.floor(Math.random() * diff) + start;
    console.log(num);
}