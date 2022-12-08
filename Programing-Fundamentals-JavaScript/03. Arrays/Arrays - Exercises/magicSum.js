function magicSum (array, num) {

    let sum = 0;

for (let i = 0; i < array.length; i++) {
    let currentNum1 = array[i];

    for(let j = i + 1; j <= array.length; j++) {
        let curentNum2 = array[j];

        if(currentNum1 + curentNum2 === num) {
            console.log(`${currentNum1} ${curentNum2}`);
        }

} 



}
}

magicSum ([14, 20, 60, 13, 7, 19, 8],
27)
