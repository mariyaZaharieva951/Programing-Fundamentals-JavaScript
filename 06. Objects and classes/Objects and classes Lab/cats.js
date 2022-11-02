function cats(array) {

    class MyCats {
        constructor(name,age) {
            this.name = name,
            this.age = age
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
let cats = [];
for(let el of array) {
    let currentCat = el;
    currentCat = currentCat.split(' ');
    let name = currentCat[0];
    let age = currentCat[1];
    let myCat = new MyCats(name,age);
    cats.push(myCat);
}
for(let cat of cats) {
    cat.meow();
}
}

cats (['Mellow 2', 'Tom 5'])