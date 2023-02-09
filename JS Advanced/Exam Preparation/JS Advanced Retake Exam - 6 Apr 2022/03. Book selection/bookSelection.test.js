const { bookSelection } = require('./bookSelection');
const { assert, expect } = require('chai');

describe(`BookSelection tests`, () => {

    describe(`IsGenreSuitable method`, () => {
        it(`t1: Thriller book for under 12`, () => {
            expect(bookSelection.isGenreSuitable("Thriller", 6)).to.equal(`Books with Thriller genre are not suitable for kids at 6 age`);
        });
        it(`t2: Horror book for under 12`, () => {
            expect(bookSelection.isGenreSuitable("Horror", 6)).to.equal(`Books with Horror genre are not suitable for kids at 6 age`);
        });
        it(`t3: Thriller book for exactly 12`, () => {
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it(`t4: Horror book for exactly 12`, () => {
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it(`t5: Comedy book for under 12`, () => {
            expect(bookSelection.isGenreSuitable("Comedy", 11)).to.equal(`Those books are suitable`);
        });
        it(`t6: Comedy book for over 12`, () => {
            expect(bookSelection.isGenreSuitable("Comedy", 13)).to.equal(`Those books are suitable`);
        });
        it(`t7: Comedy book for exactly 12`, () => {
            expect(bookSelection.isGenreSuitable("Comedy", 13)).to.equal(`Those books are suitable`);
        });

        it(`t8: Comedy book for over 12`, () => {
            expect(bookSelection.isGenreSuitable("Comedy", 13)).to.equal(`Those books are suitable`);
        });
        it(`t9: Horror book for over 12`, () => {
            expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(`Those books are suitable`);
        });
        it(`t10: Thriller book for over 12`, () => {
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(`Those books are suitable`);
        });

    })
    describe(`isItAffordable method`, () => {
        it(`t1: Price is a string`, () => {
            expect(() => bookSelection.isItAffordable('5', 6)).to.throw(`Invalid input`);
        });
        it(`t2: Price is an array`, () => {
            expect(() => bookSelection.isItAffordable([], 6)).to.throw(`Invalid input`);
        });
        it(`t3: Price is an object`, () => {
            expect(() => bookSelection.isItAffordable({}, 6)).to.throw(`Invalid input`);
        });
        it(`t3: Budget is a string`, () => {
            expect(() => bookSelection.isItAffordable(5, '6')).to.throw(`Invalid input`);
        });
        it(`t4: Budget is an array`, () => {
            expect(() => bookSelection.isItAffordable(5, [])).to.throw(`Invalid input`);
        });
        it(`t5: Budget is an object`, () => {
            expect(() => bookSelection.isItAffordable(5, {})).to.throw(`Invalid input`);
        });
        it(`t6: Price and budget are number and budget bigger price`, () => {
            expect(bookSelection.isItAffordable(5, 6)).to.equal(`Book bought. You have 1$ left`);
        });
        it(`t7: Price and budget are number and budget equal price`, () => {
            expect(bookSelection.isItAffordable(5, 5)).to.equal(`Book bought. You have 0$ left`);
        });
        (`t8: Price and budget are number and price bigger budget`, () => {
            expect(bookSelection.isItAffordable(5, 6)).to.equal(`You don't have enough money`);
        });
    })
    describe(`suitableTitles method`, () => {
        it(`t1: Input is object and string`, () => {
            expect(() => bookSelection.suitableTitles({}, 'genre')).to.throw(`Invalid input`);
        });
        it(`t2: Input is string and string`, () => {
            expect(() => bookSelection.suitableTitles('a', 'genre')).to.throw(`Invalid input`);
        });
        it(`t3: Input is number and string`, () => {
            expect(() => bookSelection.suitableTitles(5, 'genre')).to.throw(`Invalid input`);
        });
        it(`t4: Input is array and array`, () => {
            expect(() => bookSelection.suitableTitles([], [])).to.throw(`Invalid input`);
        });
        it(`t5: Input is array and object`, () => {
            expect(() => bookSelection.suitableTitles([], {})).to.throw(`Invalid input`);
        });
        it(`t6: Input is array and number`, () => {
            expect(() => bookSelection.suitableTitles([],5)).to.throw(`Invalid input`);
        });
        
    })

})