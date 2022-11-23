function activationKeys (input) {

    let activationKey = input.shift();

    let i = 0;
    
    while (input[i] !== 'Generate') {
        let line = input[i].split('>>>')

        let command = line.shift();

        if(command === 'Contains') {
            let substring = line.join('');
            if(activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`)
            } else {console.log(`Substring not found!`)}
        } else if(command === 'Flip'){
            let caseCommand = line.shift();
            let startIndex = Number(line[0]);
            let endIndex = Number(line[1]);
            let substring = activationKey.substring(startIndex,endIndex);

            if(caseCommand === 'Upper') {
                substring = substring.toUpperCase();
            } else if(caseCommand === 'Lower') {
                substring = substring.toLowerCase();
            }
            let start = activationKey.substring(0,startIndex);
            let end = activationKey.substring(endIndex);

            activationKey = start + substring + end;
            console.log(activationKey)
        } else if(command === 'Slice'){
            let startIndex = Number(line[0]);
            let endIndex = Number(line[1]);
            let start = activationKey.substring(0,startIndex);
            let end = activationKey.substring(endIndex);
            activationKey = start + end;
            console.log(activationKey)

        }
        i++;
    }
    console.log(`Your activation key is: ${activationKey}`)
}

activationKeys ((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)