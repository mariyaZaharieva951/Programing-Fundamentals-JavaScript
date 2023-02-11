const { motorcycleRider } = require('./motorcycleRider');
const { assert, expect } = require('chai');

describe('Motorcycle Rider tests', () => {
    describe('License restriction tests', () => {
        it('t1: category is AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });
        it('t2: category is A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        });
        it('t3: category is A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });
        it('t4: category is A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.")
        });
        it('t5: category is AAA', () => {
            expect(() => motorcycleRider.licenseRestriction('AAA')).to.throw("Invalid Information")
        });
        it('t6: category is object', () => {
            expect(() => motorcycleRider.licenseRestriction({})).to.throw("Invalid Information")
        });
        it('t7: category is array', () => {
            expect(() => motorcycleRider.licenseRestriction([])).to.throw("Invalid Information")
        });
        it('t7: category is number', () => {
            expect(() => motorcycleRider.licenseRestriction(5)).to.throw("Invalid Information")
        });
    });
    describe('Motorcycle Showroom tests', () => {
        it('t1: Input is strig and number', () => {
            expect(()=> motorcycleRider.motorcycleShowroom('a',5)).to.throw("Invalid Information!")
        });
        it('t2: Input is object and number', () => {
            expect(()=> motorcycleRider.motorcycleShowroom({},5)).to.throw("Invalid Information!")
        });
        it('t3: Input is number and number', () => {
            expect(()=> motorcycleRider.motorcycleShowroom(5,5)).to.throw("Invalid Information!")
        });
        it('t4: Input is array and string', () => {
            expect(()=> motorcycleRider.motorcycleShowroom(5,'a')).to.throw("Invalid Information!")
        });
        it('t5: Input is array and object', () => {
            expect(()=> motorcycleRider.motorcycleShowroom(5,{})).to.throw("Invalid Information!")
        });
        it('t6: Input is array and array', () => {
            expect(()=> motorcycleRider.motorcycleShowroom(5,[])).to.throw("Invalid Information!")
        });
        it('t7: Input is empty array and number', () => {
            expect(()=> motorcycleRider.motorcycleShowroom([],5)).to.throw("Invalid Information!")
        });
        it('t8: Input is empty array and number', () => {
            expect(()=> motorcycleRider.motorcycleShowroom([],55)).to.throw("Invalid Information!")
        });
        it('t9: EngineVolume is array with number less maximumEngineVolume', () => {
            expect(motorcycleRider.motorcycleShowroom([51],55)).to.equal("There are 1 available motorcycles matching your criteria!")
        });
        it('t10: EngineVolume is array with number better maximumEngineVolume', () => {
            expect(()=> motorcycleRider.motorcycleShowroom([60],49)).to.throw("Invalid Information");
        });
        it('t11: EngineVolume is array with number equal maximumEngineVolume', () => {
            expect(motorcycleRider.motorcycleShowroom([55],55)).to.equal("There are 1 available motorcycles matching your criteria!")
        });
    });
    describe('Other Spendings tests', () => {
        it('t1: Equipment is a string, consumables is an array, discount is a boolean', () => {
            expect(()=> motorcycleRider.otherSpendings('a',[],true)).to.throw("Invalid Information!")
        });
        it('t2: Equipment is an array, consumables is a string, discount is a boolean', () => {
            expect(()=> motorcycleRider.otherSpendings([],'a',true)).to.throw("Invalid Information!")
        });
        it('t3: Equipment is an array, consumables is an array, discount is a string', () => {
            expect(()=> motorcycleRider.otherSpendings([],[],'a')).to.throw("Invalid Information!")
        });
        it('t4: Equipment is an array, consumables is an array, discount is a boolean', () => {
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!")
        });
        it('t5: Equipment is an array, consumables is an array, discount is a boolean', () => {
            expect(motorcycleRider.otherSpendings(['helmet'],['oil filter'],true)).to.equal("You spend $207.00 for equipment and consumables with 10% discount!")
        });
        it('t6: Equipment is an array, consumables is an array, discount is a boolean', () => {
            expect(motorcycleRider.otherSpendings(['jacked'],['oil filter'],false)).to.equal("You spend $330.00 for equipment and consumables!")
        });
        it('t7: Equipment is an array, consumables is an array, discount is a boolean', () => {
            expect(motorcycleRider.otherSpendings(['jacked'],['engine oil'],false)).to.equal("You spend $370.00 for equipment and consumables!")
        });
    })
    

})
