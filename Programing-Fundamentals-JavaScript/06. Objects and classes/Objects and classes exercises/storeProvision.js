function storeProvision (currentStock, orderedStock) {

    
    let myObject = {};

for(let i = 0; i < currentStock.length; i+=2){
    let currentProduct = currentStock[i];
    let currentQuantity = Number(currentStock[i + 1]);
    myObject[currentProduct] = currentQuantity;   
}

for(let i = 0; i < orderedStock.length; i+=2) {
    let orderedProdut = orderedStock[i];
    let orderedQuantity = Number(orderedStock[i + 1]);

   
    if(!myObject.hasOwnProperty(orderedProdut)){
        myObject[orderedProdut] = orderedQuantity
    } else{ myObject[orderedProdut] += orderedQuantity;
}   
        
}
for(let line in myObject){
console.log(`${line} -> ${myObject[line]}`)
}
}

storeProvision ([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    
    )