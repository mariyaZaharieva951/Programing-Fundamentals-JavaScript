function arrayManupulator(array1, array2) {

let numbers = array1;


for(let line of array2){

    line = line.split(' ');
    let command = line.shift();
    if(command === 'add'){
        let index = Number(line[0]);
        let element = Number(line[1]);
        numbers.splice(index,0,element);
    } else if(command === 'addMany'){
        let index = Number(line.shift());
        for(let i = 0; i < line.length; i++){
            let element = Number(line[i]);
            numbers.splice(index,0,element);
            index++;
        }   
    } else if(command === 'contains'){
        let element = Number(line[0]);
        if(numbers.includes(element)){
            let index = numbers.indexOf(element);
            console.log(index)
        } else {console.log(-1);
        }
    } else if(command === 'remove') {
        let index = Number(line[0]);
        numbers.splice(index,1);
    } else if(command === 'shift') {
        let possitin = Number(line[0]);
        for(let i = 0; i < possitin; i++){
            let firtsElement = numbers.shift();
            numbers.push(firtsElement);
        }
    } else if(command === 'sumPairs') {
        let newNumbers = [];
        for(let i = 0; i < numbers.length; i+=2){
            let a = Number(numbers[i]);
            let b = Number(numbers[i+1]);
            if(!b){
                b = 0;
            }
            let sum = a + b;
            newNumbers.push(sum);  
        }
        numbers = newNumbers;
    } else if(command === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`)  
    }
}
}

arrayManupulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
    )