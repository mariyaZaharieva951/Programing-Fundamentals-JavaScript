function wordUppercase(input) {

let pattern = /(?<word>\w+)([,|.|""|!|?|\s])*/g
let result = '';

let match = pattern.exec(input);

let currentWord = match.groups.word;

while(match !== null){
    currentWord = match.groups.word;
for(let i = 0; i < currentWord.length; i++){
    let currentLetter = currentWord[i];

    if(currentLetter.charCodeAt >= 65 && currentLetter.charCodeAt <= 90){
        result += currentLetter;
    } else {currentLetter = currentLetter.toUpperCase();
    result += currentLetter}
}   
    match = pattern.exec(input);  
    result += ', ';
}
console.log(result = result.slice(0,result.length-2))
}

wordUppercase('hello')