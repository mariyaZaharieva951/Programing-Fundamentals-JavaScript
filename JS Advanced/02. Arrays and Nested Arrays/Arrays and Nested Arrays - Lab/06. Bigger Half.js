function biggerHalf(input) {

input.sort((a,b) => a-b);

let length = input.length;
let result = input.slice(Math.floor(length/2))

return result;

}

biggerHalf([4, 7, 2, 5])