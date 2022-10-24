function rotateArray(array) {

    let newArray = [];
    for(let i = 0; i < array.length - 1; i++) {
        let arrayElement = array[i];
        newArray.push(arrayElement);
    }
    let numRotation = Number(array[array.length - 1]);

    for(let j = 0; j < numRotation; j++) {
        let firstElement = newArray[0];

        for(let k = 0; k < newArray.length - 1; k++) {
        newArray[k] = newArray[k + 1 ];
        }
        newArray[newArray.length - 1] = firstElement; 
    }   
console.log(newArray.join(' '));
}

rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15'])