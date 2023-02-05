function juiceFlavor(input) {

    let juiseBottle = {};
    let result = {};

for(let line of input) {
    let[juice,quantity] = line.split(' => ');
    quantity = Number(quantity);
    if(!result.hasOwnProperty(juice)) {
        result[juice] = quantity;
    } else {result[juice] += quantity}

    if(result[juice] >= 1000){
        let bottles = Math.floor(result[juice] / 1000);
        let remainder = result[juice] - bottles*1000;
       if(!juiseBottle.hasOwnProperty(juice)){
        juiseBottle[juice] = bottles;
       } else {juiseBottle[juice] += bottles}
        
        result[juice] = remainder;
    }
}
for(let line of Object.entries(juiseBottle)) {
        console.log(`${line[0]} => ${line[1]}`);    
}
}

juiceFlavor(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)