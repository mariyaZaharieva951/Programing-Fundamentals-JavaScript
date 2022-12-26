function equalNeighbors(input) {

    let counter = 0;

for(let i = 0; i < input.length; i++){
    let currentArray = input[i];
    for(let j = 0; j < currentArray.length - 1; j++){
        let currentElement = currentArray[j];
        let nextElement = currentArray[j+1];
        if(currentElement === nextElement){
            counter++;
        }
    }
}
for(let i = 0; i < input[0].length; i++){
    for(let j = 0; j < input.length - 1; j++){
        let currentElement = input[j][i];
        let nextElement = input[j+1][i];
        if(currentElement === nextElement){
            counter++;
        }   
}
}
console.log(counter)
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yko', '6'],
['not', 'dojne', 'yet', '5']]

)