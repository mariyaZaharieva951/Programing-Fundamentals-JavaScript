function equalArrays (arr1, arr2) {

    let sum = 0;
    let isDiff = true;
    let curentNumArr1 = 0;
    let curentNumArr2 = 0;


for (let i = 0; i < arr1.length; i++) {
     curentNumArr1 = Number(arr1[i]);
    sum += curentNumArr1;

for (let j = i; j <= i; j++) {
         curentNumArr2 = Number(arr2[j]);
   
        }
        if (curentNumArr1 !== curentNumArr2) {
            (console.log(`Arrays are not identical. Found difference at ${i} index`));
    isDiff = false;
    break;
        } else {isDiff = true}
        
    }   

if(isDiff){
    console.log(`Arrays are identical. Sum: ${sum}`);
}
}

equalArrays (['10','30','30'], ['10','20','30'])