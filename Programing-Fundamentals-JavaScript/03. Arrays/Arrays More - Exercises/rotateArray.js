function rotateArray (array) {

let rotate = Number(array[array.length - 1]);
array.pop();

for(let i = 0; i < rotate ; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement); 
}
console.log(array.join(' '));
}

rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15'])