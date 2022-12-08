function pirates (input) {

let object = {};

let i = 0;
while(input[i] !== 'Sail') {
    let line = input[i].split('||');

    let city = line[0];
    let population = Number(line[1]);
    let gold = Number(line[2]);

    if(!object.hasOwnProperty(city)) {
        object[city] = {population: population, gold: gold}
    } else {object[city].population += population;
        object[city].gold += gold;

    }
    i++;
}
let index = i + 1;
while(input[index] !== 'End') {
    let line = input[index].split('=>');
    let command = line.shift();

    if(command === 'Plunder') {
        let city = line[0];
        let people = Number(line[1]);
        let gold = Number(line[2]);
        if(object.hasOwnProperty(city)){
            object[city].population -=  people;
            object[city].gold -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
        }
        if(object[city].population === 0 || object[city].gold === 0) {
            delete object[city];
            console.log(`${city} has been wiped off the map!`)
        }
    } else if(command === 'Prosper') {
        let city = line[0];
        let gold = Number(line[1]);
        if(gold > 0) {
            object[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${object[city].gold} gold.`);
        } else {console.log(`Gold added cannot be a negative number!`)}

    }
index++;
}
let entries = Object.entries(object);

if(entries.length > 0) {
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`)
    for(let line of entries){
    console.log(`${line[0]} -> Population: ${line[1].population} citizens, Gold: ${line[1].gold} kg`)
    }
} else{ console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)}

}

pirates ((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

)