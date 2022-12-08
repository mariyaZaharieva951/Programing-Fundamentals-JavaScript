function imitationGame(input) {

    let encryptedMessage = input.shift();

    let i = 0;
    while (input[i] !== 'Decode') {
        let line = input[i].split('|');
        let command = line.shift();

        if (command === 'Move') {
            let numberOfLetter = Number(line[0]);
            let firstNLetters = encryptedMessage.substring(0, numberOfLetter);
            let endLetters = encryptedMessage.substring(numberOfLetter);
            encryptedMessage = endLetters + firstNLetters;
        } else if (command === 'Insert') {
            let index = Number(line[0]);
            let value = line[1];
            let start = encryptedMessage.substring(0, index);
            let end = encryptedMessage.substring(index);
            encryptedMessage = start + value + end;
        } else if (command === 'ChangeAll') {
            let substring = line[0];
            let replacement = line[1];
            while (encryptedMessage.includes(substring)) {
                encryptedMessage = encryptedMessage.replace(substring, replacement);
            }


        }



        i++;
    }

    console.log(`The decrypted message is: ${encryptedMessage}`)

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)