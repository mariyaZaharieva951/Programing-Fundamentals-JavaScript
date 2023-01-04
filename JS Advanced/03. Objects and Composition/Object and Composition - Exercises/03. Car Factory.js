function carFactory(car) {

let result = {};

result.model = car.model;

if(car.power <= 90){
    result.engine = {
        power: 90,
        volume: 1800
} 
}else if(car.power <= 120){
    result.engine = {
        power: 120,
        volume: 2400
}
} else {
    result.engine = {
        power: 200,
        volume: 3500
}
}

if(car.carriage === 'hatchback'){
    result.carriage = {
        type: 'hatchback',
        color: car.color
    }
} else {
    result.carriage = {
        type: 'coupe',
        color: car.color
    }
}
    let size = 0;
if(car.wheelsize % 2 === 0){
    size = car.wheelsize - 1;
} else { size = car.wheelsize;}
    result.wheels = [size, size, size, size];


return result

}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)