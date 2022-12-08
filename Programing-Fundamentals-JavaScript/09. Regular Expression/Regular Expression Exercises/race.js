function race (input) {

let participants = input.shift();
let index = 0;
let line = input[index];
let racer = '';
let kmRun = 0;
let object = {};

while(line !== 'end of race') {
    kmRun = 0;
let patternLetters = /[A-Za-z]/g;
let matchesLetters = line.match(patternLetters);
let patternDigits = /[0-9]/g;
let matchesDigits = line.match(patternDigits);

for(let km of matchesDigits) {
    kmRun += Number(km);
}
racer = matchesLetters.join('');

if(participants.includes(racer)){
    if(object.hasOwnProperty(racer)) {
        object[racer] += kmRun;
    } else {object[racer] = kmRun;}
}

    index++;
    line = input[index];
}

let entries = Object.entries(object);
let sortRacers = entries.sort((a,b) => b[1] - a[1]);
let finalRacers = sortRacers.slice(0,3);
let place = 1;


console.log(`1st place: ${sortRacers[0][0]}`);
console.log(`2nd place: ${sortRacers[1][0]}`);
console.log(`3rd place: ${sortRacers[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)