class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = [];     
    }
    shopping(product) {
        let typeOfProduct = product[0];
        let priceOfProduct = Number(product[1]);

        if(this.budget < 0) {
            throw new Error ("The budget cannot be a negative number");
        }
        if(this.budget < priceOfProduct) {
            throw new Error ("Not enough money to buy this product");
        }
        this.products.push(typeOfProduct);
        this.budget -= priceOfProduct;
        return `You have successfully bought ${typeOfProduct}!`
    }
    recipes({recipeName, productsList}) {
        for(let oneProduct of productsList) {
          if(!this.products.includes(oneProduct)) {
            throw new Error ("We do not have this product");
          }
        }
        this.dishes.push({recipeName, productsList})
    }
    inviteGuests(guestName, dish) {
        if(!this.dishes.some((e) => e.recipeName === dish)) {
            throw new Error ("We do not have this dish");
        }
        if(this.guests.some((e) => e.guestName === guestName)) {
            throw new Error ("This guest has already been invited");
        }
        let obj = {};
        obj[`${guestName}`] = `${dish}`;
        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`
    }
    showAttendance() {
        let result = [];
        let objectRecipes = {};
        for (let recipe of this.dishes) {
            objectRecipes[recipe.recipeName] = recipe.productsList
        }

        for(let guest of this.guests){
            //let key = Object.keys(guest)
            let line = `${Object.keys(guest)} will eat ${Object.values(guest)}, which consists of ${objectRecipes[(Object.values(guest))].join(', ')}`;
            result.push(line)
        }
        return result.join('\n')
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
