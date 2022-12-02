function gladiatorInventory (input) {

let inventory = input.shift().split(' ');

for(let i = 0; i < input.length; i++){
    let commandArr = input[i].split(' ');
    let [command,equipment] = commandArr;

    if(command === 'Buy'){
        if(!inventory.includes(equipment)){
            inventory.push(equipment)
        }
    } else if(command === 'Trash'){
        if(inventory.includes(equipment)){
            let index = inventory.indexOf(equipment);
            inventory.splice(index,1);
        }
    } else if(command === 'Repair'){
        if(inventory.includes(equipment)){
            let index = inventory.indexOf(equipment);
            let repair = inventory.splice(index,1);
            inventory.push(equipment);
        }
    } else if(command === 'Upgrade'){
        equipment = equipment.split('-');
        let [equipmentElement, upgrade] = equipment;
        if(inventory.includes(equipmentElement)){
            let index = inventory.indexOf(equipmentElement);
            let newElement = equipment.join(':');
            inventory.splice(index + 1,0,newElement)
        }
       
    }

}

console.log(inventory.join(' '))
}

gladiatorInventory (['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)