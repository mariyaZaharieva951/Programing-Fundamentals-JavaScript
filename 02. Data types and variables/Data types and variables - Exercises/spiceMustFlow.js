function spiceMustFlow (num) {

let startingYield = Number(num);
let maxYield = 228;
let minYield = 0;
let reserve = 0;

//if( startingYield > maxYield){
//    reserve = startingYield - maxYield;
//    startingYield = maxYield;
//}
//if(startingYield < minYield) {
//    startingYield = minYield;
//}

let consumedForDay = 26;
let endConsumed = 26;

let remainder = startingYield - consumedForDay;
let yield = startingYield - 10;
let days = 1;



while(yield >= 100) {
    remainder += yield - consumedForDay;
    days++;
    yield -= 10;

    

}

remainder -= endConsumed;

console.log(days);
console.log(remainder);

}

spiceMustFlow (450)