function subSum(array, startIndex, endIndex) {

if(!Array.isArray(array)){
    return NaN
}
if(startIndex < 0){
    startIndex = 0;
}
if(endIndex > array.length - 1){
    endIndex = array.length - 1;
}
let newArray = array.slice(startIndex, endIndex + 1);
newArray.forEach(n => Number(n));

let sum = newArray.reduce((x, currentSum) => x+currentSum, 0)
return sum
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))