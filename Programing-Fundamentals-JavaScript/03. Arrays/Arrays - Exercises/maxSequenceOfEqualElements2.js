function maxSequence (array) {

    let maxEquals = Number.MIN_SAFE_INTEGER;
    let totalResult = [];
    let isMax = true;

for(let i = 0; i < array.length; i++) {
    let curuntNum = array[i];
    let result = '';
    let counter = 0;

    for(let j = i ; j < array.length; j++) {
        let rightNum = array[j];
         
        if(curuntNum !== rightNum) {
            isMax = false;
            break;
          } else { result += `${curuntNum} `;
            counter++; 
            isMax = true; 
        }   
        }
        if(counter > maxEquals) {
            maxEquals = counter;
            totalResult = result;   
        } 
    }
    if(isMax) {
        console.log(totalResult);
    
    }

}

maxSequence ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])