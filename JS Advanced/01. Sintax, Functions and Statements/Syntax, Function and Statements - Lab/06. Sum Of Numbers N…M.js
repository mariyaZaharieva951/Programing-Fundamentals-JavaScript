function sumOfNumbers(str1, str2) {

    let number1 = Number(str1);
    let number2 = Number(str2);
    let sum = 0;

    for(let i = number1; i <= number2; i++){
        sum += i;
    }

console.log(sum)
}
sumOfNumbers('-8', '20' )