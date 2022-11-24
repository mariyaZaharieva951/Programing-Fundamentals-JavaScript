function adAstra (input) {

    let result = {};

let pattern = /([|#|\|])(?<product>[\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

let totalCalories = 0;

let match = pattern.exec(input);
while(match !== null){
    let product = match.groups.product;
    let date = match.groups.date;
    let calories = match.groups.calories;

    totalCalories += Number(calories);

    result[product] = [date,calories];

    match = pattern.exec(input);
}
let days = Math.floor(totalCalories / 2000);

console.log(`You have food to last you for: ${days} days!`);

for(let line of Object.entries(result)){
    console.log(`Item: ${line[0]}, Best before: ${line[1][0]}, Nutrition: ${line[1][1]}`)
}



}


adAstra ('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples&|08/10/20|200||Carrots&|06/08/20|500||Not right|6.8.20|5|')