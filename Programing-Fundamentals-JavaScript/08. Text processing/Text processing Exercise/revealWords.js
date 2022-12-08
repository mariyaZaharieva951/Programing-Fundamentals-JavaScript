function revealWords (words, text) {

    let wordsArr = words.split(', ');
    let stringArr = text.split(' ');
    let replaceText = text;

for(let word of wordsArr) {
    let length = word.length;

for(let string of stringArr) {
    let lengthString = string.length;

    if(length === lengthString) {
        if(string.includes("*")){
            replaceText = replaceText.replace(string,word)
        }
    }
}

}
console.log(replaceText)

}

revealWords ('great',
'softuni is ***** place for learning new programming languages'

)