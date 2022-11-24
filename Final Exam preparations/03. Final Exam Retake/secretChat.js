function secretChat(input) {

    let concealedMessage = input.shift();

    let i = 0;

    while (input[i] !== 'Reveal') {

        let line = input[i].split(':|:');;


        if (line[0] === 'InsertSpace') {
            let [command, index] = line;
            let start = concealedMessage.substring(0, index);
            let end = concealedMessage.substring(index);
            concealedMessage = start + ' ' + end;
            console.log(concealedMessage);

        } else if (line[0] === 'Reverse') {
            let [command, substring] = line;
            if (concealedMessage.includes(substring)) {
                let index = concealedMessage.indexOf(substring);
                let lastIndex = index + substring.length;
                let text = substring.split('').reverse().join('');;
                let start = concealedMessage.substring(0, index);
                let end = concealedMessage.substring(lastIndex);
                concealedMessage = start + end + text;
                console.log(concealedMessage);
            } else { console.log('error') }

        } else if (line[0] === 'ChangeAll') {
            let [command, substring, replacement] = line;
            while (concealedMessage.includes(substring)) {
                concealedMessage = concealedMessage.replace(substring, replacement);
            }
            console.log(concealedMessage);
        }

        i++;
    }

    console.log(`You have a new text message: ${concealedMessage}`)
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:j:|:l',
    'Reverse:|:!gni',
    'InsertSpace:|:5',
    'Reveal'
]
)