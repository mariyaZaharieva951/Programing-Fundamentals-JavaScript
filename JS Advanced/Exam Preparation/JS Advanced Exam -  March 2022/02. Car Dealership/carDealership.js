class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0; 
    }
    addCar (model, horsepower, price, mileage) {
        if(model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error (`Invalid input!`);
        }
        this.availableCars.push({model:model, horsepower:horsepower, price:price, mileage:mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar (model, desiredMileage)  {
        let foundCar = this.availableCars.find((x) => x.model === model);
        if(!foundCar) {
            throw new Error(`${model} was not found!`);
        }
        let soldPrice = foundCar.price;
        if(foundCar.mileage > desiredMileage){  
        let diff = foundCar.mileage - desiredMileage;
        if(diff <= 40000) {
            soldPrice = foundCar.price * 95/100;
        } else {soldPrice = foundCar.price * 90/100};
        let indexOfFoundCar = this.availableCars.indexOf(foundCar);
        let deletedCar = this.availableCars.splice(indexOfFoundCar,1);
    } else {let soldPrice = foundCar.price;}
        this.soldCars.push({model:foundCar.model,horsepower:foundCar.horsepower,soldPrice:soldPrice});
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
}
    currentCar() {
        if(this.availableCars.length === 0) {
            return "There are no available cars"
        }
        let result = ['-Available cars:'];
        this.availableCars.forEach((line) => {
            result.push(`---${line.model} - ${line.horsepower} HP - ${line.mileage.toFixed(2)} km - ${line.price.toFixed(2)}$`);
        })
        return result.join('\n');
    }   
    salesReport(criteria) {
        if(criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error("Invalid criteria!");
        }
        let sorted = [];
        if(criteria === 'horsepower') {
            sorted = this.soldCars.sort((a,b) => b.horsepower -a.horsepower);
        }
        if(criteria === 'model') {
            sorted = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }
        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        result.push(`-${this.soldCars.length} cars sold:`);
        sorted.forEach((line) => {
            result.push(`---${line.model} - ${line.horsepower} HP - ${line.soldPrice.toFixed(2)}$`)
        })
        return result.join('\n');
    }
    
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 250000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
