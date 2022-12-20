function aggregateElements(input) {

let sumOfNumbers = 0;
let sumOfInverseNumbers = 0;
let concat = '';

for(let i = 0; i < input.length; i++){
    currentNumber = Number(input[i]);
    sumOfNumbers += currentNumber;
    sumOfInverseNumbers += 1/currentNumber;
    concat += `${currentNumber}`
}
console.log(sumOfNumbers);
console.log(sumOfInverseNumbers);
console.log(concat)
}

aggregateElements([2, 4, 8, 16])