function maxSequence (array) {

    let maxEquals = Number.MIN_SAFE_INTEGER;
    let result = [];
    let totalResult = [];
    let isMax = true;

for(let i = 0; i < array.length; i++) {
    let curuntNum = array[i];
    
    let counter = 0;

    for(let j = i + 1; j < array.length; j++) {
        let rightNum = array[j];
         
        if(curuntNum === rightNum) {
            result = array[i];
            counter++;
            if(counter > maxEquals) {
                maxEquals = counter;
                totalResult.push(curuntNum);
                isMax = true;
            }
        } else {isMax = false;
            break;}
    }
    if(isMax) {
        totalResult.push(result);
    }
}

}

maxSequence ([1, 1, 1, 2, 1, 1, 3, 3])