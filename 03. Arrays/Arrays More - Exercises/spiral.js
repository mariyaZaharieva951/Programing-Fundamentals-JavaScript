function spiralMatrix (row, colum) {

    let max = row * colum;
    let result = [];
    let x = 1;
    let right = 1;
    let y = 1;
    let left = 1;



for(let i = 1; i <= max; i++) {
    if(x <= 5) {
        result.push(i);
        x++;
    } else if(

    if(result.length >= 5) {
        console.log(result.join(' '));
        result = [];
    }
}



}



spiralMatrix (5, 5)