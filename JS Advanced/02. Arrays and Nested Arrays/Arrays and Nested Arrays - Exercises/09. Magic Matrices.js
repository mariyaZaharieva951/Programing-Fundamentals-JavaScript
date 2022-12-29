function magicMatricies(matrix) {

    let isMagic = true;  

for(let row = 0; row < matrix.length - 1; row++){
    let sumRow = 0;
    let sumRow2 = 0;
    let sumColumn = 0;
    let sumColum2 = 0;
    for(let column = 0; column < matrix.length; column++){
        sumRow += matrix[row][column];
        sumRow2 += matrix[row + 1][column];
        sumColumn += matrix[column][row];
        sumColum2 += matrix[column][row+1];
    }
        if(sumRow !== sumRow2 || sumColumn !== sumColum2){
            isMagic = false;
        }

}
console.log(isMagic)

}

magicMatricies([]
   
   
   )