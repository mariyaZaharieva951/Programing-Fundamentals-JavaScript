function biggestNumber (n1, n2, n3) {

let max = Number.MIN_SAFE_INTEGER;

if(n1 > max) {
    max = n1;
}
if (n2 > max) {
    max = n2;
}
if (n3 > max) {
    max = n3;
}

console.log(max);
}

biggestNumber (-2,
    7,
    3
    )