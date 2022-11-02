function townTask (array) {

    let myObject = {};
    let result =[];

for(let el of array) {
    let current = el;
    current = el.split(' | ');
    let town = current[0];
    let latitude = Number(current[1]).toFixed(2);
    let longitude = Number(current[2]).toFixed(2);
    myObject = {
        town: town,
        latitude: latitude,
        longitude: longitude
    }
    result.push(myObject);
}
for(let el of result){
    console.log(el);
}
}

townTask (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)