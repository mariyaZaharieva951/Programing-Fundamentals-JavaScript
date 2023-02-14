const {flowerShop} = require('./flowerShop');
const {expect} = require('chai');


describe("Flowers shop test", function() {
    describe("Calc Price Of Flowers tests", function() {
        it("Invalid input: flower is number, price is integer number, quantity is integer number", function() {
            expect(()=>flowerShop.calcPriceOfFlowers(5,5,5)).to.throw('Invalid input!');
        });
        it("Invalid input: flower is aray, price is integer number, quantity is integer number", function() {
            expect(()=>flowerShop.calcPriceOfFlowers([],5,5)).to.throw('Invalid input!');
        });
        it("Invalid input: flower is object, price is integer number, quantity is integer number", function() {
            expect(()=>flowerShop.calcPriceOfFlowers({},5,5)).to.throw('Invalid input!');
        });
        it("Invalid input: flower is string, price is not integer number, quantity is integer number", function() {
            expect(()=>flowerShop.calcPriceOfFlowers('a',5.1,5)).to.throw('Invalid input!');
        });
        it("Invalid input: flower is string, price is integer number, quantity is not integer number", function() {
            expect(()=>flowerShop.calcPriceOfFlowers('a',5,5.1)).to.throw('Invalid input!');
        });
        it("Valid input: flower is string, price is integer number, quantity is integer number", function() {
            expect(flowerShop.calcPriceOfFlowers('rose',5,5)).to.equal(`You need $25.00 to buy rose!`);
        });
     });
     describe("Check Flowers Available tests", function() {
        it("Flower have index = 0", function() {
            expect(flowerShop.checkFlowersAvailable("Rose",["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        });
        it("Flower have index > 0", function() {
            expect(flowerShop.checkFlowersAvailable("Lily",["Rose", "Lily", "Orchid"])).to.equal(`The Lily are available!`);
        });
        it("Flower have index < 0", function() {
            expect(flowerShop.checkFlowersAvailable("Kala",["Rose", "Lily", "Orchid"])).to.equal(`The Kala are sold! You need to purchase more!`);
        });
     });
     describe("Sell Flowers tests", function() {
        it("Invalid input: gardenArr is number, space is integer number", function() {
            expect(()=>flowerShop.sellFlowers(5,5)).to.throw('Invalid input!');
        });
        it("Invalid input: gardenArr is object, space is integer number", function() {
            expect(()=>flowerShop.sellFlowers({},5)).to.throw('Invalid input!');
        });
        it("Invalid input: gardenArr is string, space is integer number", function() {
            expect(()=>flowerShop.sellFlowers('a',5)).to.throw('Invalid input!');
        });
        it("Invalid input: gardenArr is array, space is not integer number", function() {
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5.5)).to.throw('Invalid input!');
        });
        it("Invalid input: gardenArr is array, space is negative integer number", function() {
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-5)).to.throw('Invalid input!');
        });
        it("Invalid input: gardenArr is array, space is more than gardenArr.length", function() {
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5)).to.throw('Invalid input!');
        });
        it("Invalid input: gardenArr is array, space is equal on gardenArr.length", function() {
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],3)).to.throw('Invalid input!');
        });
        it("Valid input: gardenArr is array, space is valid number", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).to.equal('Rose / Orchid');
        });
        
     });
    
});
