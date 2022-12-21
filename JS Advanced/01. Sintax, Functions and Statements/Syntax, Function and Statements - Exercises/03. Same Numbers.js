function sameNumbers(number) {

    let string = number.toString();
    let isEqual = true;
    let sum = 0;

for(let i = 0; i < string.length; i++){
    let currentNum = Number(string[i]);
    let num = Number(string[0]);
    sum += currentNum;
    if(currentNum !== num){
        console.log(false);
        isEqual = false;
        break;
    } else {isEqual = true}
}
if(isEqual){
console.log(true);
console.log(sum)
}

}

sameNumbers(1234)