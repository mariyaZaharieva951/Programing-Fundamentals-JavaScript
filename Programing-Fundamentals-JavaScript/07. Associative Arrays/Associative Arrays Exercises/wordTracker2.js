function wordTracker (array) {

    let result = {};

let words = array.shift().split(' ');

for(let word of words) {
    let counter = 0;
    for(let otherWord of array){
        if(word === otherWord){
            counter++;
        }
    }
result[word] = counter;
}
let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);

for(let line of sorted) {
    console.log(`${line[0]} - ${line[1]}`)
}

}

wordTracker ([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )