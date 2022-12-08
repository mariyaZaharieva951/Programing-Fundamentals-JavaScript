function censoredWord (string, word) {

let repeat = word.length;

let result = string.replace(word, '*'.repeat(repeat));
console.log(result)

}

censoredWord ('A small sentence with some words', 'small');
censoredWord ('Find the hidden word', 'hidden')