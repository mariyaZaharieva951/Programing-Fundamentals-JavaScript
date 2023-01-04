function storeCatalogue(array) {

    let object = {};

for(let line of array){
    let [product, price] = line.split(' : ');
    object[product] = Number(price);
}
let sorted = Object.entries(object).sort((a,b) => a[0].localeCompare(b[0]));
let first = sorted[0][0][0];
console.log(first)
for(let arr of sorted){
    let firstLetter = arr[0][0];
    if(firstLetter !== first){
        console.log(firstLetter);
    }
    console.log(`  ${arr.join(': ')}`);
    first = firstLetter;
}
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)