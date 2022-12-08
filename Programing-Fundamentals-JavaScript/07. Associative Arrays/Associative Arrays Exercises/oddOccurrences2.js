function oddOccurences(string) {

let result = {};

string = string.toLowerCase();

let array = string.split(' ');
let copyArray = [];
for(let line of array) {
copyArray.push(line);
}

for(let line of copyArray){
    let word = line;
    let counter = 0;
for(let i = 0; i < array.length; i++){ 
    let currentWord = array[i];
    if(word === currentWord){
        counter++;
    }
    result[word] = counter;
}
}
let kvps = Object.entries(result);
let totalResult = [];

for(let kvp of kvps){
    let count = kvp[1];
    if(count % 2 !== 0){
        totalResult.push(kvp);
    }
}
let sorted = totalResult.sort((a,b) => b[1] - a[1]);
let finish = [];
for(let line of sorted) {
    finish.push(line[0]);
}
console.log(finish.join(' '))
}

oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')