const { expect } = require("chai");
const { isSymmetric} = require('./checkForSymmetry');


describe('Check for Symmetry', () => {

    it(`t1: works with simemtric numeric array`, () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });

    it(`t2: return with no simemtric numeric array`, () => {
        expect(isSymmetric([1,2,3])).to.be.false;
    });

    it(`t3: returns false for non-array`, () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it(`t4: works with simemtric string array`, () => {
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });

    it(`t5: works with simemtric numeric array with odd-length`, () => {
        expect(isSymmetric([1,2,1])).to.be.true;
    });

    it(`t6: return false with string`, () => {
        expect(isSymmetric('mariya')).to.be.false;
    });

    it(`t7: return false with array of numbers and strings`, () => {
        expect(isSymmetric(['5', 2, 5])).to.be.false;
    });

})