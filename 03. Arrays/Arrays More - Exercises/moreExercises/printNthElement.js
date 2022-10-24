function printNthElement (array) {

    let nStep = Number(array[array.length - 1]);
    let result = [];

for(let i = 0; i < array.length - 1; i += nStep) {
    let currentElement = array[i];

    result.push(currentElement);

}

console.log(result.join(' '));
}

printNthElement (['5', '20', '31', '4', '20', '2'])