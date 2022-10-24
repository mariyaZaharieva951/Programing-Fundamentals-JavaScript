function maxSequence(array) {

    let maxRepite = Number.MIN_SAFE_INTEGER;
    let isDiff = true;
    let result = '';
    
    for (let i = 0; i < array.length; i++) {
        let curentNum = array[i];
        let counterRepite = 0;
        let curentResult = "";

        for (let j = i; j < array.length; j++) {
            let num = array[j];
            if (num !== curentNum) {
                 
                isDiff = true;
                break;
            } else {
                counterRepite++;
                isDiff = false;
                curentResult += `${num} `;
            }  
        }
        if (counterRepite > maxRepite) {
            maxRepite = counterRepite; 
            result = curentResult;
        }
    }
    console.log(result);
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])