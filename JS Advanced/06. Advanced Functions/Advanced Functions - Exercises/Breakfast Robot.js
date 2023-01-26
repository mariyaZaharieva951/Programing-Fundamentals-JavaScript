function breakfastRobot() {

const recipes = {
    apple: {carbohydrate: 1, flavour: 2},
    lemonade: {carbohydrate: 10, flavour: 20},
    burger: {carbohydrate: 5, fat: 7, flavour: 3},
	eggs: {protein: 5, fat: 1, flavour: 1},
	turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
};

const storage = {          
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
};
let object = {
        restock,
        prepare,        
        report,
};

return manager;

function manager(input){
    let[command,product,quantity] = input.split(' ');
     return object[command](product, quantity);     
}

function restock(product, quantity){
    storage[product] += Number(quantity);
    return `Success`
}

function prepare(product, quantity){
    quantity = Number(quantity);
    
    let needIngredients = recipes[product];
    let entriesNeedIngredients = Object.entries(needIngredients);
    entriesNeedIngredients.forEach((ingredient) => (ingredient[1]*= quantity)); //взимаме всяка съставка и я умножаваме по броя ястия

    for(let line of entriesNeedIngredients){
        let ingredient = line[0];
        let currentIngredientQuantity = storage[ingredient];
        let needIngredientQuantity = line[1];
        if(needIngredientQuantity > currentIngredientQuantity){ //ако количеството за приготвяне е по-малко количеството в склада
        return `Error: not enough ${ingredient} in stock`;
        }   
    }
    entriesNeedIngredients.forEach(([ingredient, needIngredientQuantity]) => (storage[ingredient] -= needIngredientQuantity)) //изваждаме необходимото количество за приготвянето от склада
    return `Success`
    
}

function report(){
return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
}

}

let manager = breakfastRobot(); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"))







