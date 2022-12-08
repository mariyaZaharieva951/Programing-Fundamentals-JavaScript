function arrayManipulations (array) {

let arrForManipulations = array[0];
arrForManipulations = arrForManipulations.split(' ');

for(let i = 1; i < array.length; i++) {
    let currentArr = array[i];
    currentArr = currentArr.split(' ');

    let command = currentArr[0];

    if(command === 'Add') {
        let number = currentArr[1];
        arrForManipulations.push(number);
    } else if(command === 'Remove') {
        let number = currentArr[1];
        for(let j = 0; j < arrForManipulations.length; j++){
            let currenEl = arrForManipulations[j];
            if(currenEl === number) {
                let index = arrForManipulations.indexOf(currenEl);
                arrForManipulations.splice(index, 1);
            }
        }
    } else if(command === 'RemoveAt') {
        let i = currentArr[1];
        arrForManipulations.splice(i, 1);
    } else if(command === 'Insert') {
        let number = currentArr[1];
        let index = currentArr[2];
        arrForManipulations.splice(index,0,number)
    }

}
console.log(arrForManipulations.join(' '));

}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])
