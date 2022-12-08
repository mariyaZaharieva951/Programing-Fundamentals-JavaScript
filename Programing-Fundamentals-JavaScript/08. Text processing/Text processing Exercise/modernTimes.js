function modernTimes (string) {

let stringArr = string.split(' ');
let result = '';
let isOnlyLetters = true;

for(let word of stringArr) {
    if(word.startsWith('#')) {
        if(word.length > 1) {
            
            for(let char of word) {
            if(word.charCodeAt(char) === 35 || (word.charCodeAt(char) >= 65 && word.charCodeAt(char) <= 90) || (word.charCodeAt(char) >= 97 && word.charCodeAt(char) <= 122)){
                isOnlyLetters = true;
                continue;
            } else {isOnlyLetters = false;
            break;}
            }
            if(isOnlyLetters){
            let index = stringArr.indexOf(word);
            result = stringArr[index].slice(1);
            console.log(result);
            }
            }
        }
    }

}




modernTimes ('Nowadays everyone uses # to tag a #special word in #socialMedia')