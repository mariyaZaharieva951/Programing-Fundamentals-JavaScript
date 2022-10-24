function charactersInRange (firstElement, secondElement) {


let element1 = firstElement.charCodeAt();
let element2 = secondElement.charCodeAt();
let result = '';

let startElement = Math.min(element1,element2);
let finishElement = Math.max(element1,element2);

for(let i = startElement + 1; i < finishElement; i++) {
    let currentElement = String.fromCharCode(i);
    result += `${currentElement} `;

}
console.log(result);


}

charactersInRange ('C',
'#'

)