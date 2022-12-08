function pascalCaseSplitter (input) {

    let word = '';
    let result = [];

for (let i = 0; i < input.length; i++) {

    let letter = input[i];
        //word = letter;
    if(letter === letter.toUpperCase()){
        result.push(word);
        word = letter;
    } else{ word += `${letter}`}
}
result.push(word);

console.log(result.slice(1).join(', '))

}

pascalCaseSplitter ('SplitMeIfYouCanHaHaYouCantOrYouCan')