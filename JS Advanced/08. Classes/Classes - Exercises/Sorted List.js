class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;   
    }
    add(element) {
        this.list.push(element);
        this.list.sort((a,b) => a - b);
        this.size = this.list.length;
    }
    remove(index) {
        if(index < 0 || index > this.size.length){
            throw new Error(`Invalid index`)
        } else {
            this.list.splice(index,1);
            this.list.sort((a,b) => a - b);
            this.size = this.list.length;
        }
    }
    get(index) {
        if(index < 0 || index > this.size.length){
            throw new Error(`Invalid index`)
        } else {
            let currentNumber = this.list[index];
            return currentNumber;
        }
    }
}

let list = new List();
list.add(5);
console.log(list.get(0));
list.add(3);
console.log(list.get(0)); 
list.remove(0);
console.log(list.get(0));
console.log(list)

