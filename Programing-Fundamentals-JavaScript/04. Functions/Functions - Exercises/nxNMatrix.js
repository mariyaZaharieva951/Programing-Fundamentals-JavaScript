function nxnMatrix (number) {

    
   

for(let colum = 0; colum < number; colum++) {
    let rowMatrix = '';
 for(let row = 0; row < number; row++) {
    rowMatrix += `${number} `;   
}
console.log(rowMatrix);
}
}

nxnMatrix (7)