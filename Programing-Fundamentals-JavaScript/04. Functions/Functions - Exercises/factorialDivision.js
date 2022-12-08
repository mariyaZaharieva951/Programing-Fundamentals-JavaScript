function factorialDivision (num1, num2) {

    let num1Factorial = 1;
    let num2Factorial = 1;

    for(let i = num1; i >= 1; i--) {
        num1Factorial *= i;
    }
    for(let i = num2; i >= 1; i--) {
        num2Factorial *= i;
    }
console.log((num1Factorial / num2Factorial).toFixed(2));

}

factorialDivision (5,
    2
    )