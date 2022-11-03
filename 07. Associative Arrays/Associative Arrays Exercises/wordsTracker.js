function wordsTraker (array) {

    let map = new Map;
    let firstString = (array.shift()).split(' ');
for(let i = 0; i < firstString.length; i++){
if(array.includes(firstString[i])){
    for(let word of array){
    if(firstString[i] === word){
        if(map.has(firstString[i])){
            let quantity = Number(map.get(firstString[i]));
            quantity += 1;
            map.delete(firstString[i]);
            map.set(firstString[i],quantity);  
        } else {map.set(firstString[i], 1)};
    } else{continue;}
} 
}else {map.set(firstString[i], 0)}
}

let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
for(let el of sorted){
    console.log(`${el[0]} - ${el[1]}`);

}
}

wordsTraker ([
    'this best', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    
    )