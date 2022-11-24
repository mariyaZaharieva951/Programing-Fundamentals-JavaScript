function needForSpeed (input) {

let n = input.shift();
let object = {};

for(let i = 0; i < n; i++) {
    let line = input[i].split('|');
    let[modelCar, mileage, fuel] = line;

    object[modelCar] = {mileage: Number(mileage),fuelAvailable: Number(fuel)}
}
let index = n;
let line = input[index];

while(line !== 'Stop') {
    line = line.split(' : ');
    let command = line.shift();

    if(command === 'Drive') {
        let[modelCar, distance, fuelNeed] = line;
    if(object[modelCar].fuelAvailable >= Number(fuelNeed)) {
        object[modelCar].mileage += Number(distance);
        object[modelCar].fuelAvailable -= Number(fuelNeed);
        console.log(`${modelCar} driven for ${distance} kilometers. ${fuelNeed} liters of fuel consumed.`)
    } else {console.log(`Not enough fuel to make that ride`)}

    if(object[modelCar].mileage >= 100000) {
        delete object[modelCar];
        console.log(`Time to sell the ${modelCar}!`)
    }
    } else if(command === 'Refuel') {
        let[modelCar, newFuel] = line;
        let forFuel = 75 - object[modelCar].fuelAvailable;
        if(Number(newFuel) > forFuel) {
            newFuel = forFuel;
        }
        object[modelCar].fuelAvailable += Number(newFuel);
        console.log(`${modelCar} refueled with ${newFuel} liters`)
    } else if(command === 'Revert') {
        let[modelCar, kilometers] = line;
        if(object[modelCar].mileage > Number(kilometers)) {
            object[modelCar].mileage -= Number(kilometers);
            if(object[modelCar].mileage <= 10000) {
                object[modelCar].mileage = 10000;
            } else {
            console.log(`${modelCar} mileage decreased by ${kilometers} kilometers`)
        } }
        
    }

    index++;
    line = input[index];
}
let entries = Object.entries(object);

for(let line of entries) {
    console.log(`${line[0]} -> Mileage: ${line[1].mileage} kms, Fuel in the tank: ${line[1].fuelAvailable} lt.`)
}


}

needForSpeed ([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  
  
)