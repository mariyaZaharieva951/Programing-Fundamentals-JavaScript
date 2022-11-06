function partyTime (array) {

let guestReservation = [];

let i = 0;
let guest = array[i];

while(guest !== 'PARTY'){
    guestReservation.push(guest);
    i++;
    guest = array[i];
}
let index = array.indexOf('PARTY')
let guestComing = array.slice(index + 1);

for(let one of guestComing) {
    guestReservation.includes(one);
    let index = guestReservation.indexOf(one);
    guestReservation.splice(index,1);

}
let vipGuest = [];
let realGueast = [];

console.log(guestReservation.length);

for(let guest of guestReservation) {
    if(guest[0].charCodeAt() >= 48 && guest[0].charCodeAt() <= 57){
        vipGuest.push(guest);
    } else{realGueast.push(guest)}
}
console.log(vipGuest.concat(realGueast).join('\n'))
}

partyTime (['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)