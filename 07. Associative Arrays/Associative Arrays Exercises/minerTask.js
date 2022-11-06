function minerTask (array) {

    let object = {};

for(let i = 0; i < array.length; i+=2) {
    let resource = array[i];
    let quantity = Number(array[i + 1]);
    if(object.hasOwnProperty(resource)) {
        object[resource] += quantity
    } else {object[resource] = quantity;}
    
}
for(let line of Object.entries(object)) {
    console.log(`${line[0]} -> ${line[1]}`)
}
}

minerTask ([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )