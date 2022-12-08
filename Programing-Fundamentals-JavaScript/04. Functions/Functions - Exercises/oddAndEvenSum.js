function oddAndEvenSum (number) {

    let stringOfNumber = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < stringOfNumber.length; i ++) {
        let currentElement = Number(stringOfNumber[i]);

        if(currentElement % 2 === 0) {
            evenSum += currentElement;
        } else{oddSum += currentElement}
    }

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddAndEvenSum (1000435)