function nonDecreasingSubset (array) {

    let result = [];
    let maxNum = 0;

for(let i = 0; i < array.length; i++) {
    let currentNum = array[i];

        if(currentNum >= maxNum) {
            maxNum = currentNum;
            result.push(currentNum);
        } 
    
}

console.log(result.join(' '));
}

nonDecreasingSubset([1, 1, 3, 5, 9, 2, 11])