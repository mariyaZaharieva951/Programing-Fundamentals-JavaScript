const { isOddOrEven } = require('./evenOrOdd');
const { assert } = require('chai');


describe('Is odd or even testing', () => {
    it('t1: when param is array, return undefined', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('t2: when param is object, return undefined', () => {
        assert.equal(isOddOrEven({}), undefined)
    });
    it('t2: when param is number, return undefined', () => {
        assert.equal(isOddOrEven(7), undefined)
    });
    it('t2: when param is string, return odd', () => {
        assert.equal(isOddOrEven('input'), 'odd')
    });
    it('t2: when param is string, return even', () => {
        assert.equal(isOddOrEven('even'), 'even')
    });


})