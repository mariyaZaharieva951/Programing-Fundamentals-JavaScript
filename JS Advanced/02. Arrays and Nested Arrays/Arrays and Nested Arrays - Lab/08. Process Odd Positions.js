function processOddPosition(input) {

    let result = [];

for(let i = 0; i < input.length; i++){
    if(i % 2 !== 0){
        let currentElement = input[i];
        result.push(currentElement*2);
    }   
}
result.reverse();
return result;
}

console.log(processOddPosition([3, 0, 10, 4, 7, 3]))