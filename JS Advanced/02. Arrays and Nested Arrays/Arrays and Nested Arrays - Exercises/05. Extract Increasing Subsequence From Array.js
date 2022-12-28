function extractIncreasingSubs(array) {

let result = [];
let bigNumber = Number.NEGATIVE_INFINITY;

for(let i = 0; i < array.length; i++){
    let currentNum = Number(array[i]);
    if(currentNum >= bigNumber){
        bigNumber = currentNum;
        result.push(bigNumber);
    }  
}
return result;
}

console.log(extractIncreasingSubs([-2,-1]
    
    ))