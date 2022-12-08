function maxNumber (array) {

    let result = [];

for(let i  = 0; i < array.length; i++) {
    let currentNum = array[i];
    let isBigger = true;

    for(let j = i + 1; j < array.length; j++) {
        let righthNum = array[j];

        if(currentNum <= righthNum) {
            isBigger = false;
            break;
        } else {isBigger = true;
        }
    }
if(isBigger) {
    result.push(currentNum);
}

}
console.log(result.join(' '));
}

maxNumber ([27, 19, 52, 50, 13, 45, 48])