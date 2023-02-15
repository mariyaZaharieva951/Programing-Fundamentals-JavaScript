const { library } = require('./library');
const { expect } = require('chai');

describe("Library test", function () {
    describe("Calc Price Of Book tests", function () {
        it("Invalid input: nameOfBook is number, year is integer number", function () {
            expect(() => library.calcPriceOfBook(3, 3)).to.throw("Invalid input");
        });
        it("Invalid input: nameOfBook is array, year is integer number", function () {
            expect(() => library.calcPriceOfBook([], 3)).to.throw("Invalid input");
        });
        it("Invalid input: nameOfBook is object, year is integer number", function () {
            expect(() => library.calcPriceOfBook([], 3)).to.throw("Invalid input");
        });
        it("Invalid input: nameOfBook is empty string, year is integer number", function () {
           expect(() => library.calcPriceOfBook('', 3)).to.throw("Invalid input");
        });
        it("Invalid input: nameOfBook is string, year is not integer number", function () {
            expect(() => library.calcPriceOfBook('Alisa', 3.1)).to.throw("Invalid input");
        });
        it("Invalid input: nameOfBook is string, year is negative number", function () {
            expect(() => library.calcPriceOfBook('Alisa', -3)).to.throw("Invalid input");
        });
        it("Valid input: nameOfBook is string, year is number", function () {
            expect(library.calcPriceOfBook('Alisa', 1920)).to.equal(`Price of Alisa is 10.00`);
        });
        it("Valid input: nameOfBook is string, year is number", function () {
            expect(library.calcPriceOfBook('Alisa', 1980)).to.equal(`Price of Alisa is 10.00`);
        });
        it("Valid input: nameOfBook is string, year is number", function () {
            expect(library.calcPriceOfBook('Alisa', 1990)).to.equal(`Price of Alisa is 20.00`);
        });
    });
    describe("Find Book tests", function () {
        it("Invalid input: booksArr is empty", function () {
            expect(()=>library.findBook([],'Cod')).to.throw("No books currently available");
        });
        it("Valid input: desiredBook is in booksArr", function () {
            expect(library.findBook(['Alisa', 'Cod'], 'Alisa')).to.equal("We found the book you want.");
        });
        it("Valid input: desiredBook is not in booksArr", function () {
            expect(library.findBook(['Alisa', 'Cod'], 'Peter')).to.equal("The book you are looking for is not here!");
        });

    });
    describe("Arrange the books tests", function () {
        it("Invalid input: countbooks is not integer number", function () {
            expect(() => library.arrangeTheBooks(1.1)).to.throw(("Invalid input"));
        });
        it("Invalid input: countbooks is negative number", function () {
            expect(() => library.arrangeTheBooks(-1)).to.throw(("Invalid input"));
        });
        it("Valid input: countbooks is 10", function () {
            expect(library.arrangeTheBooks(10)).to.equal("Great job, the books are arranged.");
        });
        it("Valid input: countbooks is 40", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it("Valid input: countbooks is 50", function () {
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
        });


    });

});
