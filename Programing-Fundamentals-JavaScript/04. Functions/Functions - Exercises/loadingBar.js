function loadingBar (number) {

let counterPercentage = number / 10;
let counterPoint = 10 - counterPercentage;
let result = '';

for(let i = 0; i < counterPercentage; i++) {
    result += '%';
} 
for(let j = counterPercentage; j < 10; j++) {
    result += '.';
}
console.log(`${number}% [${result}]`);
console.log(`Still loading...`)

}

loadingBar (30)