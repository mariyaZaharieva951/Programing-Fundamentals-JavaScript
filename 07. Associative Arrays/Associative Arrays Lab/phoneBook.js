function phoneBook (array) {

let object = {};

for(let line of array) {
    let[name, phoneNumber] = line.split(' ');
    object[name] = phoneNumber;   
}
for(let el in object) {
console.log(`${el} -> ${object[el]}`)
}
}

phoneBook (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)