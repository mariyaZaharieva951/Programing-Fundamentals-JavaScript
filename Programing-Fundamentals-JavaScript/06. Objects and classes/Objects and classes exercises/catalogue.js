function catalogue(input) {

    let object = {};

    for (let line of input) {
        line = line.split(' : ');
        let product = line[0];
        let price = line[1];
        object[product] = price;
    }
    let sorted = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]));
    let currentInitial = '';

    for (let array of sorted) {
        let startLetter = array[0][0];
        if (startLetter !== currentInitial) {
            console.log(array[0][0]);
        }
        console.log(`  ${array[0]}: ${array[1]}`)
        currentInitial = startLetter;

    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)