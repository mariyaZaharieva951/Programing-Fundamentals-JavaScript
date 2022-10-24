function rounding (number, precisios) {

    if (precisios > 15) {
     precisios = 15;
    }
let num = number.toFixed(precisios);
console.log(parseFloat(num));
}

rounding (10.5,3)