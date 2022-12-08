function employess (array) {

    let myObject = {};
    let result = [];
for(let line of array) {
    let name = line;
    let number = Number(name.length);
    myObject = {
        name: name,
        number: number
    }
    result.push(myObject);
}
for(let el of result){
    
console.log(`Name: ${el['name']} -- Personal Number: ${el['number']}`)
}
}

employess ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )