// create a function that returns the sum of numbers from 1 to n 

// let sum = 0;
function sum(n){
    if(n==0){
        return 0;
    }
    return n + sum(n-1);
}
