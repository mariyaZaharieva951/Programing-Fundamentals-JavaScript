function addAndSubstract (array) {

    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i < array.length; i++ ) {
        let curentNum = array[i];
        sumArray += curentNum;

        if(curentNum % 2 === 0) {
            curentNum = curentNum + i;
            sumNewArray += curentNum;
            newArray.push(curentNum);
        } else {curentNum = curentNum - i;
        sumNewArray += curentNum;
        newArray.push(curentNum);
    }


    }
console.log(newArray);
console.log(sumArray);
console.log(sumNewArray);

}

addAndSubstract ([5, 15, 23, 56, 35])