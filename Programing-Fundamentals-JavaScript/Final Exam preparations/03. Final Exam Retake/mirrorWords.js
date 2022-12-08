function mirrorWords(input) {
    let result = [];

let pattern = /([@|#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
input = input.join('');
let matches = input.match(pattern);

if(matches === null) {
    console.log(`No word pairs found!`);
    console.log(`No mirror words!`)
    return
}
let match = pattern.exec(input);
let counter = 0;

while(match !== null) {
    
    let firstWord = match.groups.word1;
    let secondWord = match.groups.word2;

    counter++;
    let mirrorWord = secondWord
    secondWord = secondWord.split('').reverse().join('');
    if(firstWord === secondWord) {
        result.push(`${firstWord} <=> ${mirrorWord}`);
        
    } 
    match = pattern.exec(input);
}
if(counter > 0){
console.log(`${counter} word pairs found!`);
}
if(result.length > 0) {
    console.log(`The mirror words are:`)
    console.log(result.join(', '))
} else {console.log(`No mirror words!`)}
}

mirrorWords ([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
    ]
    )