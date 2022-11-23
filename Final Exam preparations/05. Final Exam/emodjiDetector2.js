function emodjiDetector (input) {

    input = input.join('');
    let result = [];
    let pattern = /(::|\*\*)(?<word>[A-Z]{1}[a-z]{2,})\1/g;
    let patternDigits = /[0-9]{1}/g
    let match = pattern.exec(input);
    let coolThreshold = 1;
    let counter = 0;
   

    let matchDigits = input.match(patternDigits);
    
    for(let digit of matchDigits) {
        coolThreshold = coolThreshold * Number(digit);
    }
    
    
    while(match !== null) {
        counter++;
        let word = match.groups.word;
        let coolnes = 0;
        for(letter of word){
            let digit = Number(letter.charCodeAt());
            coolnes += digit;
        }
        if(coolnes >= coolThreshold) {
            result.push(match[0])
        }
    
        match = pattern.exec(input);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`)
    console.log(result.join('\n'))
    
    
    
    }
    
    emodjiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])