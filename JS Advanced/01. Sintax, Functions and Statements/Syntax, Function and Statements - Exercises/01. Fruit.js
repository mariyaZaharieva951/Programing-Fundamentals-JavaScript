function fruit(typeOfFruit,grams,price) {

let kilogram = grams/1000;
let needMoney = price * kilogram;


console.log(`I need $${needMoney.toFixed(2)} to buy ${kilogram.toFixed(2)} kilograms ${typeOfFruit}.`)
}

fruit('apple', 1563, 2.35)