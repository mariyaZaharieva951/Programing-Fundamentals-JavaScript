function thePianist(input) {

    let numberOfPieces = Number(input.shift());
    let colection = {};


    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input[i].split('|');
        colection[piece] = [composer, key];
    }

    let index = numberOfPieces;
    let command = input[index];

    while (command !== 'Stop') {
        command = command.split('|');
        let commandWord = command.shift();
        let [piece, composer, key] = command;

        if (commandWord === 'Add') {
            if (!colection.hasOwnProperty(piece)) {
                colection[piece] = [composer, key];
                console.log(`${piece} by ${colection[piece][0]} in ${colection[piece][1]} added to the collection!`)
            } else {console.log(`${piece} is already in the collection!`)}
        } else if (commandWord === 'Remove') {
            if (colection.hasOwnProperty(piece)) {
                delete colection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else { console.log(`Invalid operation! ${piece} does not exist in the collection.`) }
        } else if (commandWord === 'ChangeKey') {
            if (colection.hasOwnProperty(piece)) {
                key = composer;
                composer = colection[piece][0];
                colection[piece] = [composer, key];
                console.log(`Changed the key of ${piece} to ${colection[piece][1]}!`)
            } else {console.log(`Invalid operation! ${piece} does not exist in the collection.`)}

        }


        index++;
        command = input[index];
    }
let entries = Object.entries(colection)
for(let line of entries) {
    console.log(`${line[0]} -> Composer: ${line[1][0]}, Key: ${line[1][1]}`)
}

}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
)