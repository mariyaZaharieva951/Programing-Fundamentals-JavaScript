function cookingByNumbers(num, ...list) {

let number = Number(num);

for(let i = 0; i < list.length; i++){
    let command = list[i];
    switch(command){
        case 'chop': number = number / 2; break;
        case 'dice': number = Math.sqrt(number); break;
        case 'spice': number += 1; break;
        case 'bake': number *= 3; break;
        case 'fillet': number = number * 80/100; break;
    }
    console.log(number)
}
   
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')