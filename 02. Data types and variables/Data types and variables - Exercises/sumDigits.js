function sumDigits (number) {

    let text = number.toString();
    let sumOfDigits = 0;

    for(let i = 0; i < text.length; i++) {
        digit = Number(text[i]);
        sumOfDigits += digit;

    }

console.log(sumOfDigits);
}

sumDigits (1254875963854751201)