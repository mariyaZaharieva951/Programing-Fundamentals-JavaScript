function condenseArrayToNumber (array) {
    
    let newArray = [];
    
    for(let el of array) {
        newArray.push(el);
    }

while(newArray.length > 1) {
    let tempArr = [];
    for(let i = 0; i < newArray.length - 1; i++) {
         tempArr[i] = newArray[i] + newArray[i + 1];

    }
    newArray = tempArr;
}

console.log(newArray.join());

}


condenseArrayToNumber ([2,10,3])