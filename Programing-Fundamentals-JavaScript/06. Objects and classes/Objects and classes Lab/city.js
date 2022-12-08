function city (object) {

for(let el in object) {
    console.log(`${el} -> ${object[el]}`);
}

}

city ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)