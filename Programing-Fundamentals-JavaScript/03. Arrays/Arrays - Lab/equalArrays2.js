function equalArrays (arr1, arr2) {

    let sumArr = 0;
    let isEqual = true;
    let currentNumArr1 = 0;
    let currentNumArr2 = 0;


for(let i = 0; i < arr1.length; i++) {
     currentNumArr1 = Number(arr1[i]);
        sumArr += currentNumArr1;

    for(let j = i; j <= i; j++) {
         currentNumArr2 = Number(arr2[j]);
    }
        if(currentNumArr1 !== currentNumArr2) {
       console.log(`Arrays are not identical. Found difference at ${i} index`);
       isEqual = false;
       break;
        } else {isEqual = true;}
        
        
    }
    if(isEqual) {
        console.log(`Arrays are identical. Sum: ${sumArr}`);
}
}



equalArrays (['1','2','3','4','5'], ['1','2','4','4','5'])