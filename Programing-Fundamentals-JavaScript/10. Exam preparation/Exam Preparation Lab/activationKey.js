function activationKeys (input){

let activationKey = input.shift();

let line = input.shift();

while(line !== 'Generate') {
    line = line.split('>>>');
    let command = line.shift();

    if(command === 'Contains') {
        let substring = line[0];
        if(activationKey.includes(substring)){
            console.log(`${activationKey} contains ${substring}`)
        } else{console.log('Substring not found!')}

    } else if(command === 'Flip') {
        let letterCase = line[0];
        let startIndex = Number(line[1]);
        let endIndex = Number(line[2]);
        let text = activationKey.substring(startIndex,endIndex);
        let newText = text;
        if(letterCase === 'Upper') {
           newText = text.toUpperCase();
        } else if(letterCase === 'Lower') {
            newText = text.toLowerCase();
        }
        activationKey = activationKey.replace(text, newText);
        //let start = activationKey.substring(0, startIndex);
        //let end = activationKey.substring(endIndex)
        //activationKey = start + text + end
        console.log(`${activationKey}`)

    } else if(command === 'Slice') {
        let startIndex = Number(line[0]);
        let endIndex = Number(line[1]);
        let text = activationKey.substring(startIndex,endIndex);
        activationKey = activationKey.replace(text,'');
        console.log(`${activationKey}`)
    }
    line = input.shift();  
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