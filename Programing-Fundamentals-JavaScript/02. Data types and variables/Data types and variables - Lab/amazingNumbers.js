function amazingNumbers (number) {

let textNum = number.toString();
let length = textNum.length;
let sum = 0;
let result = '';

for (let i=0; i < length; i++) {
    sum += Number(textNum[i]); 
}
let textSum = sum.toString();

for(let j = 0; j < textSum.length; j++) {
    let digit = Number(textSum[j]);

 if (digit === 9) {
result = 'True';
    break;
 } else {result = 'False'}
}

  console.log(`${number} Amazing? ${result}`);
}

amazingNumbers (1233)