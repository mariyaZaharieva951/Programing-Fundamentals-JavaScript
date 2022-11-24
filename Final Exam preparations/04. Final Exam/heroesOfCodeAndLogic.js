function heroesOfCodeAndLogic (input) {

let n = input.shift();
let object = {};

for(let i = 0; i < n; i++){
    let line = input[i].split(' ');
    let heroName = line[0];
    let hitPoints = Number(line[1]);
    let manaPoints = Number(line[2]);

    if(!object.hasOwnProperty(heroName)){
        object[heroName] = {hp: hitPoints, mp: manaPoints}
    } else {object[heroName] += {hp: hitPoints, mp: manaPoints}
    if(object[heroName].hp > 100){
        object[heroName].hp = 100;
    }
    if(object[heroName].mp > 100){
        object[heroName].mp = 100;
    }
    }
}
let i = n;

while(input[i] !== 'End') {
    let line = input[i].split(' - ');

    let command = line.shift();

    if(command === 'CastSpell') {
        let heroName = line[0];
        let mpNeeded = Number(line[1]);
        let spellName = line[2];

        if(object[heroName].mp >= mpNeeded){
            object[heroName].mp -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${object[heroName].mp} MP!`)
        } else{console.log(`${heroName} does not have enough MP to cast ${spellName}!`)}
    } else if(command === 'TakeDamage') {
        let heroName = line[0];
        let damage = Number(line[1]);
        let attacker = line[2];

        object[heroName].hp -= damage;
        if(object[heroName].hp > 0){
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${object[heroName].hp} HP left!`)
        } else {delete object[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`)
        }
    } else if(command === 'Recharge') {
        let heroName = line[0];
        let amount = Number(line[1]);
        let needToMaxMp = 200 - object[heroName].mp;
        let amountRecovery = 0;
        if(needToMaxMp >= amount) {
            amountRecovery = amount;
        object[heroName].mp += amountRecovery;
        } else {amountRecovery = needToMaxMp
            object[heroName].mp += amountRecovery;}
            console.log(`${heroName} recharged for ${amountRecovery} MP!`)
    } else if(command === 'Heal') {
        let heroName = line[0];
        let amount = Number(line[1]);
        let needToMaxHp = 100 - object[heroName].hp;
        let amountRecovery = 0;
        if(needToMaxHp >= amount) {
            amountRecovery = amount;
        object[heroName].hp += amountRecovery;
        } else {amountRecovery = needToMaxHp;
            object[heroName].hp += amountRecovery;}
            console.log(`${heroName} healed for ${amountRecovery} HP!`)
    }
    i++;
}

let entries = Object.entries(object)

for(let array of entries) {
    console.log(array[0]);
    console.log(` HP: ${array[1].hp}`);
    console.log(` MP: ${array[1].mp}`);
}



}

heroesOfCodeAndLogic (['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    ]
    )