function heroicInventory(array) {

    let result = [];

for(let arr of array){
    let [name,level,items] = arr.split(' / ');
    if(!items){
        items = [];
    } else { items = items.split(', ')}
    let object = {
        name: name,
        level: Number(level),
        items: items
    }
    result.push(object);
}   
console.log(JSON.stringify(result))
}

heroicInventory(['Isacc / 25 ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)