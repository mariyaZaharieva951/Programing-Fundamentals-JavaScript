class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let types = [];
        vegetables.forEach((line) => { 
            let[type,quantity,price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            
            let foundProduct = this.availableProducts.find((product) => product.type === type);
            if(!foundProduct) {
                this.availableProducts.push({type:type,quantity:quantity,price:price});
                types.push(type);
            } else {foundProduct.quantity += quantity;
            if(foundProduct.price < price) {
                foundProduct.price = price;
            }}
        });
        return `Successfully added ${types.join(', ')}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach((line) => {
            let[type, quantity] = line.split(' ');
            quantity = Number(quantity);
            let foundProduct = this.availableProducts.find((product) => product.type === type);
            if(!foundProduct) { 
                throw new Error (`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                if(foundProduct.quantity < quantity) {
                    throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
               let priceFoundProduct = foundProduct.price * quantity;
               totalPrice += priceFoundProduct;
               foundProduct.quantity -= quantity;
            }
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable (type, quantity) {
        let foundProduct = this.availableProducts.find((product) => product.type === type);
        if(!foundProduct) { 
            throw new Error (`${type} is not available in the store.`)
        }
        if(foundProduct.quantity < quantity) {
            foundProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        foundProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }
    revision () {
        let result = ["Available vegetables:"];
        let sorted = this.availableProducts.sort((a,b) => a.price - b.price);
        sorted.forEach((product) => {
            result.push(`${product.type}-${product.quantity}-$${product.price}`)
        })
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n')
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

