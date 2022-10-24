function addAndRemove (array) {

    let result = [];

for(let i = 0; i < array.length; i++) {
    let currentWord = array[i];

    if(currentWord === "add") {
        result.push(i + 1);

    } else if(currentWord === "remove") {
        result.pop();

    }

}
if(result.length > 0) {
console.log(result.join(' '));
} else {console.log("Empty")}
}

addAndRemove (['remove', 'remove', 'remove'])