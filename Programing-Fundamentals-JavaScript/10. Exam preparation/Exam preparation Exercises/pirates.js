function pirates (input) {

    let object = {};

let line = input.shift();
while(line !== 'Sail') {
    line = line.split('||');
    let town = line[0];
    let population = Number(line[1]);
    let gold = Number(line[2]);
    if(!object.hasOwnProperty(town)){
        object[town] = {population: population, gold: gold}
    } else {object[town].population += population;
            object[town].gold += gold;
    }
    line = input.shift();
}
line = input.shift();
while(line !== 'End') {
    line = line.split('=>');
    let command = line.shift();

    if(command === 'Plunder') {
        let town = line[0];
        let people = Number(line[1]);
        let gold = Number(line[2]);
        if(object.hasOwnProperty(town)) {
            object[town].population -= people;
            object[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
        }
        if(object[town].population <= 0 || object[town].gold <= 0) {
            delete object[town];
            console.log(`${town} has been wiped off the map!`);
        }
    } else if(command === 'Prosper'){
        let town = line[0];
        let gold = Number(line[1]);
        if(object.hasOwnProperty(town)) {
            if(gold >= 0){
            object[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${object[town].gold} gold.`)
            } else {console.log(`Gold added cannot be a negative number!`)}
        } 
    }
    line = input.shift();
}
let keys = Object.keys(object);
//console.log(keys)
if(keys.length > 0){
console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`);
let entries = Object.entries(object);
for(let line of entries) {
    console.log(`${line[0]} -> Population: ${line[1].population} citizens, Gold: ${line[1].gold} kg`)
}
} else {console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)}
}

pirates (["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]
)