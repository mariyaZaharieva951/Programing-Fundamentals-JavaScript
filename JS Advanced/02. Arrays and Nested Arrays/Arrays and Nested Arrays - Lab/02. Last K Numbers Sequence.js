function lastKNumbersSequence(n, k) {

let result = [];
let firstNumber = 1;
result.push(firstNumber);

for(let i = 1; i < n; i++){
    let numbers = result.slice(-k);
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    result.push(sum)
}
return result;
}

console.log(lastKNumbersSequence(6, 3))