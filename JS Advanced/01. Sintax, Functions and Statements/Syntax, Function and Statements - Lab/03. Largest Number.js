function largestNumber (a, b, c) {

    let max = Number.NEGATIVE_INFINITY;

    if(a > max) {
        max = a;
    }
    if(b > a) {
        max = b 
    }
    if(c > b) {
        max = c
    }
console.log(`The largest number is ${max}.`)
}

largestNumber (-5, -3, -16)