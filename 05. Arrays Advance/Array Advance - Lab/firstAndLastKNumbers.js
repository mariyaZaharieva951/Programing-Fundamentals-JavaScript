function firsAndLastKNumber (array) {

let k = array.shift();
let result = [];


for(let i = 0; i < k; i++) {
    let curruentEl = array[i];
    result.push(curruentEl); 
}
console.log (result.join(' '));
result = [];
for(let i = (array.length - k); i < array.length; i++) {
    let currentEl = array[i];
    result.push(currentEl); 
}
console.log (result.join(' '));

}

firsAndLastKNumber ([2, 
    7, 8, 9]
    )