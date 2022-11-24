function imitationGame (input) {

let string = input[0];  
let i = 1;
let command = input[1];

while(command !== 'Decode') {
command = input[i];
command = command.split("|");

let instructions = command[0];

for(let j = 1; j <= string.length; j++) {
  let content = command[j];
  let contentReplace = command[j+1];

if(instructions === "ChangeAll") {
  string = string.replace(content, contentReplace);
}
}

  i++;
  command = input[i];
}

}

imitationGame ([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )