// maximum
let arr = [1,4,2,5,5,8,9,7,5,4,3,3,2];
let max = -1;
for (let i=0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}


// maximum
let max1 = arr.reduce((max,el) => {
    if(max < el){
        return el;
    }
    else{
        return max;
    }
})
console.log(max1);