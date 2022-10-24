function nonDecreasingSubset (array) {

    let result = '';
    let isBigger = true;

for(let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    for(let j = 0; j < i; j++) {

       let leftNum = array[j];

        if(currentNum > leftNum) {
            isBigger = true;
           
        } else {isBigger = false;
            break;}
    }
    if(isBigger) {
 result += `${currentNum} `;
    }
}
console.log(result);
}

nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])