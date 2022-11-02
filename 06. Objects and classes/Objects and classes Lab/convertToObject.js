function convertToObject (string) {

let myObject = JSON.parse(string);


for(let el in myObject) {
    let key = el;
  console.log(`${key}: ${myObject[key]}`)
}

}

convertToObject ('{"name": "George", "age": 40, "town": "Sofia"}')