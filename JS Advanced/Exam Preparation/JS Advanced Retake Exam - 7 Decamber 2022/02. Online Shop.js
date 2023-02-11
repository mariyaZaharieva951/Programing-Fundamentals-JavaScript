class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        if(this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }
        this.products.push({product: product, quantity: quantity});
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity) {
        if(!this.products.some((x) => x.product === product)) {
          throw new Error (`There is no ${product} in the warehouse.`)
        }
        if(minimalQuantity <= 0) {
            throw new Error (`The quantity cannot be zero or negative.`);
        }
        let currentProduct = this.products.find((x) => x.product === product);
        if(currentProduct.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        }
        let different = minimalQuantity - currentProduct.quantity
        currentProduct.quantity = minimalQuantity;
        return `You added ${different} more from the ${product} products.`
    }
    sellProduct(product) {
        let currentProduct = this.products.find((x) => x.product === product);
        if(!currentProduct) {
            throw new Error (`There is no ${product} in the warehouse.`)
          }
          currentProduct.quantity--;
          this.sales.push({product, quantity: 1});
          return `The ${product} has been successfully sold.`
    }
    revision() {
        let result = [];
        if(this.sales.length === 0) {
            throw new Error (`There are no sales today!`)
        }
        let salesTotal = 0;
        this.sales.forEach((x) => salesTotal += x.quantity);
        result.push(`You sold ${salesTotal} products today!`);
        result.push(`Products in the warehouse:`);
        for(let line of this.products){
            result.push(`${line.product}-${line.quantity} more left`)
        }
        return result.join('\n')
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

