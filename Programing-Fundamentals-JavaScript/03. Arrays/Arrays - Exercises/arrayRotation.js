function arrayRotation (array, rotation) {

    

for (let i = 0; i < rotation; i++) {
    let curentElement = array[0];
    
    for (let j = 0; j < array.length; j++) {
    array[j] = array[j + 1];
    }

    array[array.length - 1] = curentElement;
}
console.log(array.join(' '));
}

arrayRotation ([32, 21, 61, 1], 4)