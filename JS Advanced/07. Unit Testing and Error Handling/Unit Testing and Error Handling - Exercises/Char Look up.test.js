const { lookupChar } = require('./charLookup');
const { assert } = require('chai');

describe('Look up char testing', () => {
    it(`t1: when accepts a string and an non-integer`, () => {
        assert.equal(lookupChar('test',5.5), undefined)
    });
    it(`t2: when accepts a number and an integer`, () => {
        assert.equal(lookupChar(7,5), undefined)
    });
    it(`t3: when accepts an array and an integer`, () => {
        assert.equal(lookupChar([],5), undefined)
    });
    it(`t4: when accepts an object and an integer`, () => {
        assert.equal(lookupChar({},5), undefined)
    });
    it(`t5: when accepts a string and index is negative number`, () => {
        assert.equal(lookupChar('string',-5), "Incorrect index")
    });
    it(`t6: when accepts a string and index is bigger than to the string.length`, () => {
        assert.equal(lookupChar('string',10), "Incorrect index")
    });
    it(`t7: when accepts a string and index is equal to the string.length`, () => {
        assert.equal(lookupChar('string',6), "Incorrect index")
    });
    it(`t8: when accepts correct string and index`, () => {
        assert.equal(lookupChar('string',1), "t")
    });

})