function searchForANumber (numbers, task) {

let countElements = task[0];
let deleteElement = task[1];
let searchElement = task[2];

let elements = numbers.slice(0);
elements = elements.slice(0,countElements);
let deleteEl = elements.splice(0,deleteElement);
let counter = 0;

for(let el of elements) {
    if(el === searchElement){
        counter++;
    }
}

console.log(`Number ${searchElement} occurs ${counter} times.`)

}

searchForANumber ([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    )