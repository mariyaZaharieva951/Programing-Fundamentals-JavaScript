function condenseArray (array) {






while(array.length > 1) {
    let newArray = [];
    for(let i = 0; i < array.length - 1; i++) {
    let currentNum = array[i] + array[i + 1];

    newArray.push(currentNum);
    }
    array = newArray;
    }
console.log(array.join());

}




condenseArray ([2,10,3])