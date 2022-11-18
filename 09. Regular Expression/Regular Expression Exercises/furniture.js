function furniture (input) {

let string = input.join(' ');
let index = 0;
let line = input[index];
let pattern = /[>]{2}(?<furniture>\w+)[<]{2}(?<price>[\d.]+)!(?<count>\d+)/g;
let furnitures = '';
let sum = 0;

while(line[index] !== 'Purchase'){
    let matches = pattern.exec(string);

if(matches !== null){
    let furniture = matches.groups.furniture;
    furnitures += `${furniture}\n`

    let price = Number(matches.groups.price) * Number(matches.groups.count);  
    sum += price;
} else{break;}


index++;
line = input[index];
}
console.log(`Bought furniture:\n${furnitures.trim()}`);
console.log(`Total money spend: ${sum.toFixed(2).trimStart()}`);
}
// 80 от 100 -> Да се довърши
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']

)