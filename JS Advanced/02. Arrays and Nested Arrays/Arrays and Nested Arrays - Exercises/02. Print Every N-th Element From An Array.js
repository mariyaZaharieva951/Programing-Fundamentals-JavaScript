function printEveryNthElement(array,n) {

    let result = [];

for(let i = 0; i < array.length; i+=n){
    let element = array[i];
    result.push(element);
}
return result;
}

console.log(printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))