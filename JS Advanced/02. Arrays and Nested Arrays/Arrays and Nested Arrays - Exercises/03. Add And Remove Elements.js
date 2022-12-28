function addAndRemoveElement(array) {

    let initialNumber = 1;
    let result = [];

for(let i = 0; i < array.length; i++){
    let command = array[i];

    if(command === 'add'){
        result.push(initialNumber);
    } else if(command === 'remove'){
        result.pop();  
    }
    initialNumber++;
}
    if(result.length > 0){
        console.log(result.join('\n'))
    } else{console.log('Empty')}
}

addAndRemoveElement(['add', 
'add', 
'remove', 
'add', 
'add']

)