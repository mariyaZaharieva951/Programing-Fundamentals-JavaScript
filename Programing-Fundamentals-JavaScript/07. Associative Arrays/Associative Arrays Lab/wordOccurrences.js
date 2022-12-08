function wordOccurrences (array) {

let map = new Map;


for(let el of array) {
    if(map.has(el)){
        value = map.get(el)
        value += 1;
        map.delete(el);
        map.set(el,value);
        continue;
    }
    map.set(el,1);
}
let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
for(let line of sorted) {
    console.log(`${line[0]} -> ${line[1]} times`)
}
}

wordOccurrences (["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])