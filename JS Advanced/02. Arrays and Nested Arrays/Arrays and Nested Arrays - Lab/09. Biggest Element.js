function biggestElement(array) {

    let max = Number.MIN_SAFE_INTEGER;

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        let currentElement = array[i][j];
        if(currentElement > max){
            max = currentElement;
        }
    }
}
return max;
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )