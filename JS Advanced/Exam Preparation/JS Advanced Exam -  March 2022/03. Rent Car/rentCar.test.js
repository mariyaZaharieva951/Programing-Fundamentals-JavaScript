const { rentCar } = require('./rentCar');
const { expect } = require('chai');

describe("Rent car tests", function() {
    describe("Search Car tests", function() {
        it("Invalid input: shop is string, model is string", function() {
            expect(()=>rentCar.searchCar('a','a')).to.throw('Invalid input!');
        });
        it("Invalid input: shop is number, model is string", function() {
            expect(()=>rentCar.searchCar(5,'a')).to.throw('Invalid input!');
        });
        it("Invalid input: shop is object, model is string", function() {
            expect(()=>rentCar.searchCar({},'a')).to.throw('Invalid input!');
        });
        it("Invalid input: shop is array, model is number", function() {
            expect(()=>rentCar.searchCar([],5)).to.throw('Invalid input!');
        });
        it("Invalid input: shop is array, model is array", function() {
            expect(()=>rentCar.searchCar([],[])).to.throw('Invalid input!');
        });
        it("Invalid input: shop is array, model is object", function() {
            expect(()=>rentCar.searchCar([],{})).to.throw('Invalid input!');
        });
        it("Invalid input: shop is array, model is not integer number", function() {
            expect(()=>rentCar.searchCar([],1.1)).to.throw('Invalid input!');
        });
        it("Invalid input: shop is array, model is negative number", function() {
            expect(()=>rentCar.searchCar([],-1)).to.throw('Invalid input!');
        });
        it("Valid input: shop is empty array, model is 'Audi'", function() {
            expect(()=>rentCar.searchCar([],'Audi')).to.throw('There are no such models in the catalog!');
        });
        it("Valid input: shop is empty array, model is 'Audi'", function() {
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Toyota')).to.throw('There are no such models in the catalog!');
        });
        it("Valid input: shop is array of 'Volkswagen, BMW, Audi', model is 'Audi'", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`);
        });
        it("Valid input: shop is array of 'Volkswagen, BMW, Audi', model is 'Audi'", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"],'Audi')).to.equal(`There is 2 car of model Audi in the catalog!`);
        });
     
     });
     describe("Calculate Price Of Car tests", function() {
        it("Invalid input: type of model is number, days is integer number", function() {
            expect(()=>rentCar.calculatePriceOfCar(5,5)).to.throw('Invalid input!');
        });
        it("Invalid input: type of model is object, days is integer number", function() {
            expect(()=>rentCar.calculatePriceOfCar({},5)).to.throw('Invalid input!');
        });
        it("Invalid input: type of model is array, days is integer number", function() {
            expect(()=>rentCar.calculatePriceOfCar({},5)).to.throw('Invalid input!');
        });
        it("Invalid input: type of model is string, days is integer string", function() {
            expect(()=>rentCar.calculatePriceOfCar('a','a')).to.throw('Invalid input!');
        });
        it("Invalid input: type of model is string, days is integer array", function() {
            expect(()=>rentCar.calculatePriceOfCar('a',[])).to.throw('Invalid input!');
        });
        it("Invalid input: type of model is string, days is integer object", function() {
            expect(()=>rentCar.calculatePriceOfCar('a',{})).to.throw('Invalid input!');
        });
        it("Valid input: type of model is 'Opel', days is integer 5", function() {
            expect(()=>rentCar.calculatePriceOfCar('Opel',5)).to.throw('No such model in the catalog!');
        });
        it("Valid input: type of model is 'BMW', days is integer 2", function() {
            expect(rentCar.calculatePriceOfCar('BMW',2)).to.equal(`You choose BMW and it will cost $90!`);
        });
     });
     describe("Check Budget tests", function() {
        it("Invalid input: cost per day is no integer number, days is integer number, budget is integer number", function() {
            expect(()=>rentCar.checkBudget(1.1,5,5)).to.throw('Invalid input!');
        });
        it("Invalid input: cost per day is integer number, days is no integer number, budget is integer number", function() {
            expect(()=>rentCar.checkBudget(1,5.1,5)).to.throw('Invalid input!');
        });
        it("Invalid input: cost per day is integer number, days is integer number, budget is no integer number", function() {
            expect(()=>rentCar.checkBudget(1,5,5.1)).to.throw('Invalid input!');
        });
        it("Valid input: cost per day is integer number, days is integer number, budget is integer number", function() {
            expect(rentCar.checkBudget(1,2,3)).to.equal('You rent a car!');
        });
        it("Valid input: cost per day is integer number, days is integer number, budget is integer number", function() {
            expect(rentCar.checkBudget(1,3,3)).to.equal('You rent a car!');
        });
        it("Valid input: cost per day is integer number, days is integer number, budget is integer number", function() {
            expect(rentCar.checkBudget(1,5,3)).to.equal('You need a bigger budget!');
        }); 
        
    });
});
