const { movieTheater } = require('./03. Movie Theater');
const {assert, expect} = require('chai');


describe('Movie Theater Test', () => {

    describe('AgeRestrictions tests', () => {
        it(`t1: MovieRating is equal "G"`, () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });
        it(`t2: MovieRating is equal "PG"`, () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });
        it(`t3: MovieRating is equal "R"`, () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });
        it(`t4: MovieRating is equal "NC-17"`, () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });
        it(`t5: MovieRating is equal "N"`, () => {
            expect(movieTheater.ageRestrictions('N')).to.equal(`There are no age restrictions for this movie`);
        });
        it(`t6: MovieRating is equal "n"`, () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });
    }) 
    describe('Money spent tests', () => {
        it(`t1: Input is string, array, array`, () => {
            expect(() => movieTheater.moneySpent('a',[],[])).to.throw('Invalid input');
        });
        it(`t2: Input is number, string, array`, () => {
            expect(() => movieTheater.moneySpent(5,'a',[])).to.throw('Invalid input');
        });
        it(`t3: Input is number, array, string`, () => {
            expect(() => movieTheater.moneySpent(5,[],'a')).to.throw('Invalid input');
        });
        it(`t4: Input is array, array, array`, () => {
            expect(() => movieTheater.moneySpent([],[],[])).to.throw('Invalid input');
        });
        it(`t5: Input is object, array, array`, () => {
            expect(() => movieTheater.moneySpent({},[],[])).to.throw('Invalid input');
        });
        it(`t6: Input is number, object, array`, () => {
            expect(() => movieTheater.moneySpent(5,{},[])).to.throw('Invalid input');
        });
        it(`t7: Input is number, array, object`, () => {
            expect(() => movieTheater.moneySpent(5,[],{})).to.throw('Invalid input');
        });
        it(`t8: Input is 2, Nachos, Soda`, () => {
            expect(movieTheater.moneySpent(2,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase is 38.50`);
        });
        it(`t9: Input is 2, Nachos, Water`, () => {
            expect(movieTheater.moneySpent(2,['Nachos'],['Water'])).to.equal(`The total cost for the purchase is 37.50`);
        });
        it(`t10: Input is 2, Popcorn, Water`, () => {
            expect(movieTheater.moneySpent(2,['Popcorn'],['Water'])).to.equal(`The total cost for the purchase is 36.00`);
        });
        it(`t11: Input is 2, Popcorn, Soda`, () => {
            expect(movieTheater.moneySpent(2,['Popcorn'],['Soda'])).to.equal(`The total cost for the purchase is 37.00`);
        });
        it(`t12: Input is 4, Popcorn, Soda`, () => {
            expect(movieTheater.moneySpent(4,['Popcorn'],['Soda'])).to.equal(`The total cost for the purchase with applied discount is 53.60`);
        });
        it(`t13: Input is 4, Popcorn, Water`, () => {
            expect(movieTheater.moneySpent(4,['Popcorn'],['Water'])).to.equal(`The total cost for the purchase with applied discount is 52.80`);
        });
        it(`t14: Input is 4, Nachos, Water`, () => {
            expect(movieTheater.moneySpent(4,['Nachos'],['Water'])).to.equal(`The total cost for the purchase with applied discount is 54.00`);
        });
        it(`t15: Input is 4, Nachos, Soda`, () => {
            expect(movieTheater.moneySpent(4,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase with applied discount is 54.80`);
        });
    })
    
    describe('Reservation tests', () => {
        it(`t1: Input is string, number`, () => {
            expect(() => movieTheater.reservation('a', 5)).to.throw(`Invalid input`);
        });
        it(`t2: Input is object, number`, () => {
            expect(() => movieTheater.reservation({}, 5)).to.throw(`Invalid input`);
        });
        it(`t3: Input is number, number`, () => {
            expect(() => movieTheater.reservation(5, 5)).to.throw(`Invalid input`);
        });
        it(`t4: Input is array, string`, () => {
            expect(() => movieTheater.reservation([], 'a')).to.throw(`Invalid input`);
        });
        it(`t5: Input is array, array`, () => {
            expect(() => movieTheater.reservation([], [])).to.throw(`Invalid input`);
        });
        it(`t6: Input is array, object`, () => {
            expect(() => movieTheater.reservation([], {})).to.throw(`Invalid input`);
        });
        it(`t7: Input is array, positive number`, () => {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}, {rowNumber: 2, freeSeats: 5 }], 3)).to.equal(2);
        });

    })
})
