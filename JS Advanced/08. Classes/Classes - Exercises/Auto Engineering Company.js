function AutoEngineeringCompany(array) {

    let cars = {};

    for(line of array) {
        let[carBrands, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);
        if(!cars.hasOwnProperty(carBrands)){
            cars[carBrands] = [];
        }     
        cars[carBrands].push({carModel,producedCars})
    }
for(let line of Object.entries(cars)){
    console.log(line[0]);
    let result = {};
    for(let arr of line[1]){
        if(!result.hasOwnProperty(arr.carModel)){
            result[arr.carModel] = arr.producedCars;
        } else {result[arr.carModel] += arr.producedCars;}
    }
    for(let [key,value] of Object.entries(result)){
        console.log(`###${key} -> ${value}`)
    }
    
}
}

AutoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)