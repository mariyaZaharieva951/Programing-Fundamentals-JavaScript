function convertToJSON (firstName, lastName, hairColor ) {

let myObject = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor
}
let result = JSON.stringify(myObject);
console.log(result);

}

convertToJSON ('George', 'Jones', 'Brown')