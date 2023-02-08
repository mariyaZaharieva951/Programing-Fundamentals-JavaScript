class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if(this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity) {
        if(!this.plants.some((line) => line.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let currentPlant = this.plants.find((line) => line.plantName === plantName)
        if(currentPlant.ripe === true){ 
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        currentPlant.ripe = true;
        currentPlant.quantity += quantity;
        
        if(quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }
        if(quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }   
    }
    harvestPlant(plantName) {
        if(!this.plants.some((line) => line.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let currentPlant = this.plants.find((line) => line.plantName === plantName)
        if(currentPlant.ripe === false){ 
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants = this.plants.filter((line) => line.plantName !== plantName);
        this.storage.push(currentPlant);
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        let sortedPlants = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        let allPlants = `Plants in the garden:`;
        sortedPlants.forEach((line) => allPlants += ` ${line.plantName},`);
        result.push(allPlants.substring(0,allPlants.length-1))
        
        if(this.storage.length === 0) {
            result.push(`Plants in storage: The storage is empty.`)
        } else {
            let allStorage = 'Plants in storage:';
            this.storage.forEach((line) => allStorage += ` ${line.plantName} (${line.quantity}),`);
            result.push(allStorage.substring(0,allStorage.length-1))
        }

        return result.join('\n')

    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


