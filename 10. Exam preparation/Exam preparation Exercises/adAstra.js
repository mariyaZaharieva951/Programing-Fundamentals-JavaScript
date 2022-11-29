function adAstra(input) {

    input = input.join('');

let pattern = /([\||#])(?<item>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,10000})\1/g;

let matches = input.matchAll(pattern);
let sumOfCalories = 0;

for(let arr of matches){
    sumOfCalories += Number(arr.groups.calories);
}
let days = Math.floor(sumOfCalories / 2000)
console.log(`You have food to last you for: ${days} days!`);

let exec = pattern.exec(input);

while(exec !== null){
    console.log(`Item: ${exec.groups.item}, Best before: ${exec.groups.expirationDate}, Nutrition: ${exec.groups.calories}`);

    exec = pattern.exec(input);
}


}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )