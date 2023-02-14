class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if(this.capacity <= 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({bookName: bookName, bookAuthor: bookAuthor, payed: false});
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let foundBook = this.books.find((x) => x.bookName === bookName);

        if(!foundBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(foundBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        foundBook.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let foundBook = this.books.find((x) => x.bookName === bookName);

        if(!foundBook) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if(!foundBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        let index = this.books.indexOf(foundBook);
        this.books.splice(index,1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if(bookAuthor === undefined) {
            let result = [];
            result.push(`The book collection has ${this.capacity} empty spots left.`);
            let sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            sorted.forEach((el) => { if(el.payed === true) {
                result.push(`${el.bookName} == ${el.bookAuthor} - Has Paid.`)}
            else if(el.payed === false) {
                result.push(`${el.bookName} == ${el.bookAuthor} - Not Paid.`)
            }})
            return result.join('\n');
        }
        let result = [];
        let foundBook = this.books.find((x) => x.bookAuthor === bookAuthor);
        if(!foundBook) {
            return `${foundBook.bookAuthor} is not in the collection.`
        }
        if(foundBook.payed === true) {
            foundBook.payed = 'Has Paid' }
        else if(foundBook.payed === false) {
            foundBook.payed = `Not Paid`
        }
        result.push(`${foundBook.bookName} == ${foundBook.bookAuthor} - ${foundBook.payed}.`);
        return result.join('');
    }
}

const library = new LibraryCollection(5);
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');

library.removeBook('Don Quixote');
library.removeBook('In Search of Lost Time');
//console.log(library.getStatistics('Miguel de Cervantes'));
