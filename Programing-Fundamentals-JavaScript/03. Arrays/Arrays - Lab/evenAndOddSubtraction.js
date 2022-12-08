function evenAndOddSubtraction (numbers) {

    let sumEven = 0;
    let sumOdd = 0;
    let diff = 0;

for (let number of numbers) {

    if(number % 2 === 0) {
        sumEven += number;
    } else {sumOdd += number;}

}
diff = sumEven - sumOdd;

console.log(diff);
}

evenAndOddSubtraction ([3,5,7,9])