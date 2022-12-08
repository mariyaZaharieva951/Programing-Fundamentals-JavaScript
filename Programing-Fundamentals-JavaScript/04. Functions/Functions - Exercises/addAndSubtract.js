function addAndSubtract (num1, num2, num3) {

    function sum(firstNum, secondNum) {
        let sum = firstNum + secondNum;
        return sum;
    }
    let add = sum(num1,num2);

    function subtract(number1, number2) {
        let subtract = number1 - number2;
        return subtract;
    }
    console.log(subtract(add, num3))
}

addAndSubtract (23,
    6,
    10
    )