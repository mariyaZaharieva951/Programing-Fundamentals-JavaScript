function greatestCommonDivisor(num1, num2) {

    let result = 1;

for(let i = 1; i <= num2; i++) {

    if(num1 % i === 0 && num2 % i === 0) {
        result = i;
    }
}
console.log(result)
}

greatestCommonDivisor(2154, 458)