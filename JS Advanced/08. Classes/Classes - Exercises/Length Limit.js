class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        this.innerLength -= length;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerLength === 0){
            return `...`
        }
        if(this.innerString.length > this.innerLength){
            let newString = '';
            newString = this.innerString.slice(0,(this.innerString.length - this.innerLength));
            return `${newString}...`;  
        } else { return this.innerString }   
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); 
