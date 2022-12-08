function emodjiDetector (input) {

    let result = [];

let pattern = /(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g;
let match = pattern.exec(input);

let patternDigits = /[0-9]+/g;
let digits = input.join('').match(patternDigits);
digits = digits.join('');
let coolThreshold = 1;
for(let digit of digits){
    coolThreshold *= Number(digit);
}

let counter = 0;

while(match !== null) {
    let coolness = 0;
    counter++;

    let word = match.groups.word;
    for(let letter of word) {
        coolness += letter.charCodeAt();
    }
    if(coolness >= coolThreshold){
        result.push(match[0]);
    }

    match = pattern.exec(input);
}

console.log(`Cool threshold: ${coolThreshold}`);
console.log(`${counter} emojis found in the text. The cool ones are:`);
console.log(result.join('\n'))

}

emodjiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
emodjiDetector (["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
emodjiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])