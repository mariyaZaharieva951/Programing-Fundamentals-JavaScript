function sumEvenNumbers (numbers) {

let elements = 0;
let sumEven = 0;

for(let i = 0; i < numbers.length; i++) {
    elements = Number(numbers[i]);

    if(elements % 2 === 0) {

        sumEven += elements;
    }

    
}
console.log(sumEven);


}

sumEvenNumbers (['1','2','3','4','5','6'])