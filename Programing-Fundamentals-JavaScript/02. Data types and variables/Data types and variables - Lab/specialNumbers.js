function specialNumbers (n) {

    

for (let i = 1; i <= n; i++) {
    let number = Number(i);
//console.log(number);
    let textNumber = number.toString();

    let sumOfDigit = 0;

for (let j = 0; j < textNumber.length; j++) {
    let digit = Number(textNumber[j]);
    sumOfDigit += digit;
}
    if (sumOfDigit === 5 || sumOfDigit === 7 || sumOfDigit === 11) {
        console.log(`${number} -> True`);
    } else {console.log(`${number} -> False`);
}
//console.log(digit);
}
}



specialNumbers (15)