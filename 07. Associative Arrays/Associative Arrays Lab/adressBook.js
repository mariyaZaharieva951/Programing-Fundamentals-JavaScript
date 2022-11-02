function adressBook (array) {

    let object = {};
for(let line of array) {
    let[name, adress] = line.split(':');
    object[name] = adress;
}
let keys = Object.keys(object)
let sortingKeys = keys.sort((a,b) => a.localeCompare(b));

for(let el of sortingKeys){
    console.log(`${el} -> ${object[el]}`)
}

}

adressBook (['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)