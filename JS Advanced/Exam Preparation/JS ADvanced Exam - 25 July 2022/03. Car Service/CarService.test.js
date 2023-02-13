const {carService} = require('./03. CarService');
const {expect} = require('chai');

describe("Car service tests", function() {
    describe("Is it Expensive tests", function() {
        it("Issue is 'Motor'", function() {
            expect(carService.isItExpensive("Motor")).to.equal(`The overall price will be a bit cheaper`);
        });
        it("Issue is array", function() {
            expect(carService.isItExpensive([])).to.equal(`The overall price will be a bit cheaper`);
        });
        it("Issue is object", function() {
            expect(carService.isItExpensive({})).to.equal(`The overall price will be a bit cheaper`);
        });
        it("Issue is number", function() {
            expect(carService.isItExpensive(5)).to.equal(`The overall price will be a bit cheaper`);
        });
        it("Issue is 'Engine'", function() {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("Issue is 'Transmission'", function() {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        
     });
     describe("Discount tests", function() {
        it("NumberOfParts is string, totalPrice is number", function() {
            expect(()=>carService.discount('a',5)).to.throw("Invalid input");
        });
        it("NumberOfParts is array, totalPrice is number", function() {
            expect(()=>carService.discount([],5)).to.throw("Invalid input");
        });
        it("NumberOfParts is object, totalPrice is number", function() {
            expect(()=>carService.discount({},5)).to.throw("Invalid input")
        });
        it("NumberOfParts is number, totalPrice is string", function() {
            expect(()=>carService.discount(5,'a')).to.throw("Invalid input")
        });
        it("NumberOfParts is number, totalPrice is array", function() {
            expect(()=>carService.discount(5,[])).to.throw("Invalid input")
        });
        it("NumberOfParts is number, totalPrice is object", function() {
            expect(()=>carService.discount(5,{})).to.throw("Invalid input")
        });
        it("NumberOfParts is 3, totalPrice is 5", function() {
            expect(carService.discount(3,5)).to.equal(`Discount applied! You saved 0.75$`)
        });
        it("NumberOfParts is 7, totalPrice is 5", function() {
            expect(carService.discount(7,5)).to.equal(`Discount applied! You saved 0.75$`)
        });
        it("NumberOfParts is 8, totalPrice is 5", function() {
            expect(carService.discount(8,5)).to.equal(`Discount applied! You saved 1.5$`)
        });
        it("NumberOfParts is 2, totalPrice is 5", function() {
            expect(carService.discount(2,5)).to.equal("You cannot apply a discount")
        });
        it("NumberOfParts is 1, totalPrice is 5", function() {
            expect(carService.discount(2,5)).to.equal("You cannot apply a discount")
        });
     });
     describe("Parts To Buy tests", function() {
        it("PartsCatalog is string, neededParts is array", function() {
            expect(()=>carService.partsToBuy('a',[])).to.throw("Invalid input");
        });
        it("PartsCatalog is number, neededParts is array", function() {
            expect(()=>carService.partsToBuy(5,[])).to.throw("Invalid input");
        });
        it("PartsCatalog is object, neededParts is array", function() {
            expect(()=>carService.partsToBuy({},[])).to.throw("Invalid input");
        });
        it("PartsCatalog is array, neededParts is string", function() {
            expect(()=>carService.partsToBuy([],'a')).to.throw("Invalid input");
        });
        it("PartsCatalog is array, neededParts is number", function() {
            expect(()=>carService.partsToBuy([],5)).to.throw("Invalid input");
        });
        it("PartsCatalog is array, neededParts is object", function() {
            expect(()=>carService.partsToBuy([],{})).to.throw("Invalid input");
        });
        it("PartsCatalog is valid array, neededParts is valid array", function() {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145);
        });
        it("PartsCatalog is empty array, neededParts is object", function() {
            expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equal(0);
        });


        
     });
     
     
});
