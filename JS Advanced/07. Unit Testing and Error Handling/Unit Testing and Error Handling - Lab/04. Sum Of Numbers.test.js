const { expect } = require("chai");
const { sum } = require('./sumOfNumbers');

describe('Sum of Numbers Tests', () => {
    it('test1: works with array of numbers', () => {
        expect(sum([1,2,3])).to.equal(6, 'num is string');
    });

    it('test2: works with array of numbers as string', () => {
        expect(sum(["1","2","3"])).to.equal(6, 'num is string');
    });

    it('test3: returns NaN, when have param is not a number', () => {
        expect(sum(["a","2","3"])).to.be.NaN;
    });

});

