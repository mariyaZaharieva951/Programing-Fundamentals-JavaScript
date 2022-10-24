function spiralMatrix (row, colum) {

    let arr = [];
    let arr2 =[];

for(let i = 1; i <= row; i++) {
    currentEl = i;
    arr.push(i);
}   
console.log(arr.join(' '));
for(let i = colum + 1; i < colum * 2 ; i++) {
    console.log(i); 
}
for(let j = row * 2; j < row * 3 - 1; j++) {
    currentEl = j;
    arr2.push(j);
}   
arr2.reverse();
console.log(arr2.join(' '));
//for(let k = colum * 3 - 1; k < colum * 4 - 3; k++ ) {

    //console.log(k);
//}
for(let k = (colum * 4 - 4); k > (colum * 4 - 1); k-- ) {
    console.log(k);
}

}

spiralMatrix (5, 5)