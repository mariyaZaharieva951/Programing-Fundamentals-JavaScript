function singnCheck (num1, num2, num3) {

   
    let result = '';

if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    result = "Positive";   
} else if (num1 >= 0 && num2 < 0 && num3 < 0) {
    result = "Positive";   
} else if (num1 < 0 && num2 >= 0 && num3 < 0) {
    result = "Positive";   
} else if (num1 < 0 && num2 < 0 && num3 >= 0) {
    result = "Positive";   
} else {result = "Negative"}


return result;
}

console.log (singnCheck ( '5',
    '12',
   '-15'
   ))