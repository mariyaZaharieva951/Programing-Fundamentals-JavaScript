function latinLetters (n) {
    let letter = '';
    let row = '';

for(let x = 0; x < n; x++) {
     letter = String.fromCharCode(97+x);
    
     //console.log(letter);
     row += letter;

    for(let y = 0; y < n; y++) {
         letter = String.fromCharCode(97+y);
         row += letter;

        //console.log(letter);
        for(let z = 0; z < n; z++) {
             letter = String.fromCharCode(97+z);
            row += letter;
            console.log(row);
        row = '';
            

        }
        console.log(row);
        row = '';
    }
    console.log(row);
    row = '';
}
console.log(row);
row = '';

}

latinLetters (2)