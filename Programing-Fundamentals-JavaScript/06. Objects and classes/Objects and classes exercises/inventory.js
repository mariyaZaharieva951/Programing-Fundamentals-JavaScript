function inventoryTask (array) {

    let myObject = {};
    let result = [];

for(let arr of array) {
    let currentArr = arr.split(' / ');
    let name = currentArr[0];
    let level = Number(currentArr[1]);
    let items = currentArr[2];

    myObject = {
        name: name,
        level: level,
        items: items
    }
    result.push(myObject);
}

result.sort((a,b) => {
   return a.level - b.level
})

for(let el of result){
    console.log(`Hero: ${el['name']}\nlevel => ${el['level']}\nitems => ${el['items']}`)
}


}

inventoryTask ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )