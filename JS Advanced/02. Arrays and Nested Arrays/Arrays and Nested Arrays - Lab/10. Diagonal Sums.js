function diagonalSum(input) {

let diagonal1 = 0;
let diagonal2 = 0;

let length = input[0].length;
let firstIndex = 0;
let lastIndex = input[0].length-1;

for(let i = 0; i < length; i++){
    diagonal1 += input[i][firstIndex++];
    diagonal2 += input[i][lastIndex--]
}
console.log(diagonal1, diagonal2)
}

diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )