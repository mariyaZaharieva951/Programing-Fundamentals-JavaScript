function imitationGame (input) {

let message = input.shift();

let instructions = input.shift();
while(instructions !== 'Decode') {
    instructions = instructions.split('|');

    let command = instructions.shift();
    if(command === 'Move'){
        let numberOfLetters = Number(instructions[0]);
        let substring = message.substring(0,numberOfLetters);
        message = message.substring(numberOfLetters) + substring;
    } else if(command === 'Insert') {
        let index = Number(instructions[0]);
        let value = instructions[1];
        let start = message.substring(0,index);
        let end = message.substring(index);
        message = start + value + end;
    } else if(command === 'ChangeAll') {
        let substring = instructions[0];
        let replace = instructions[1];
        while(message.includes(substring)){
        message = message.replace(substring,replace);
       // message = newMessagde;
        }
        
    }
    instructions = input.shift();
}
console.log(`The decrypted message is: ${message}`)

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )