function replaceRepeatingChars (input) {

let array = input.split('');
let result = '';

for(let i = 0; i < array.length; i++) {
        letter = array[i];
    let nextLetter = array[i+1];


    if(letter !== nextLetter){
        result += `${letter}`
    }
}

console.log(result);


}

replaceRepeatingChars ('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars ('qqqwerqwecccwd')