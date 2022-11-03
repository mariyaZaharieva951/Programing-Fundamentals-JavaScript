function oddOccurences (string) {

    let map = new Map;
let textArr = string.toLowerCase().split(' ');

let set = new Set(textArr);
let uniqueArr = Array.from(set)

for(let word of uniqueArr) {
    for(let repeatWord of textArr){
        if(word === repeatWord){
            if(map.has(word)){
                let quantity = map.get(word);
                quantity += 1;
                map.set(word,quantity);
            } else {map.set(word,1)}
        }
    }
}
let resultMap = new Map();
for(let line of Array.from(map.entries())){
    let word = line[0];
    let quantity = line[1];
    if(quantity % 2 !== 0){
        resultMap.set(word,quantity);
    }
}
let resultArr = [];
for(let el of Array.from(resultMap.keys())){    
    resultArr.push(el);
}
console.log(resultArr.join(' '));
}

oddOccurences ('Cake IS SWEET is Soft CAKE sweet Food')