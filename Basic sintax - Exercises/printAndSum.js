function printAndSum (startNum, endNum) {
let sum = 0;
let out = "";

for (let i = startNum; i <= endNum; i++) {
    
    sum += i;
    out += `${i} ` 
    
}
console.log(out);
console.log(`Sum: ${sum}`);
}

printAndSum (5, 10)