const { chooseYourCar } = require('./chooseYourCar');
const { assert, expect } = require('chai');

describe("Choose your car Tests", function() {
    describe("Choosing Type Tests", function() {
        it("t1: Year is less than 1900", function() {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1888)).to.throw("Invalid Year!");
        });
        it("t2: Year is more than 2022", function() {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw("Invalid Year!");
        });
        it("t3: Type of car is different from 'Sedan'", function() {
            expect(() => chooseYourCar.choosingType('Cupe', 'red', 1901)).to.throw("This type of car is not what you are looking for.");
        });
        it("t4: Year is more than 2010", function() {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2022)).to.equal("This red Sedan meets the requirements, that you have.");
        });
        it("t5: Year is equal 2010", function() {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal("This red Sedan meets the requirements, that you have.");
        });
        it("t6: Year is 2007", function() {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2007)).to.equal("This Sedan is too old for you, especially with that red color.");
        });
     });
     describe("BrandName Tests", function() {
        it("t1: Passed brands parameters is not an array and brandIndex is inside the limits of the array", function() {
            expect(() => chooseYourCar.brandName("BMW", 2)).to.throw("Invalid Information!");
        });
        it("t2: Passed brands parameters is an array and brandIndex is outside the limits of the array", function() {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota"], 2)).to.throw("Invalid Information!");
        });
        it("t3: Passed brands parameters is an array and brandIndex is not a number", function() {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota"], "2")).to.throw("Invalid Information!");
        });
        it("t4: Passed brands parameters is an array and brandIndex is inside the limits of the array", function() {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Mercedes"], 1)).to.equal('BMW, Mercedes');
        });
        
     });
     describe("Car Fuel Consumption Tests", function() {
        it("t1: DistanceInKilometers is string, consumptedFuelInLitres is number", function() {
            expect(() => chooseYourCar.carFuelConsumption("a", 2)).to.throw("Invalid Information!");
        });
        it("t2: DistanceInKilometers is number, consumptedFuelInLitres is string", function() {
            expect(() => chooseYourCar.carFuelConsumption(2, 'a')).to.throw("Invalid Information!");
        });
        it("t3: DistanceInKilometers is 0, consumptedFuelInLitres is string", function() {
            expect(() => chooseYourCar.carFuelConsumption(0, 'a')).to.throw("Invalid Information!");
        });
        it("t4: DistanceInKilometers is number, consumptedFuelInLitres is negative number", function() {
            expect(() => chooseYourCar.carFuelConsumption(2, -2)).to.throw("Invalid Information!");
        });
        it("t5: DistanceInKilometers is negative number, consumptedFuelInLitres is positive number", function() {
            expect(() => chooseYourCar.carFuelConsumption(-2, 2)).to.throw("Invalid Information!");
        });
        it("t6: DistanceInKilometers is 100, consumptedFuelInLitres is 6", function() {
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
        });
        it("t6: DistanceInKilometers is 100, consumptedFuelInLitres is 7", function() {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
        });
        it("t7: DistanceInKilometers is 100, consumptedFuelInLitres is 10", function() {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal("The car burns too much fuel - 10.00 liters!");
        });
        
        
     });
     
});
