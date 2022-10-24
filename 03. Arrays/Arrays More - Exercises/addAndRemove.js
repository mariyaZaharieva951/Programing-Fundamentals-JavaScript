function addAndRemove (array) {

    let result = [];
    let currentNum = 0;

for(let i = 0; i < array.length; i++) {
    let command = array[i];
    currentNum++;

    switch(command) {
        case 'add': result.push(currentNum); break;
        case 'remove': result.pop(); break;
    }
}
console.log(result.join(' '));
}

addAndRemove (['add', 'add', 'remove', 'add', 'add'])