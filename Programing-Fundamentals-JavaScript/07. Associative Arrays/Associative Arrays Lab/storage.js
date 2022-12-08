function storage (array) {

let map = new Map();

for(let line of array) {
    let[product, quantity] = line.split(' ');
    if(map.has(product)) {
        let currentQuantity = Number(map.get(product));
        quantity = Number(quantity);
        quantity += currentQuantity;
    }
    map.set(product, quantity)
}


for(let key of Array.from(map.keys())){
    console.log(`${key} -> ${map.get(key)}`)
}
}

storage (['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)