function sumFirtsLast(array) {

let firstElement = Number(array[0]);
let lastElement = Number(array[array.length - 1]);

let sum = firstElement + lastElement;

return sum;

}

console.log(sumFirtsLast(['20', '30', '40']))