function travelTime(array) {

    let object = {};


    for (let line of array) {
        let [country, city, costs] = line.split(' > ');


        if (!object.hasOwnProperty(country)) {
            object[country] = {};
        }
        if (!object[country].hasOwnProperty(city)) {
            object[country][city] = Number(costs);
        } else {
            if (object[country][city] > Number(costs)) {
                object[country][city] = Number(costs);
            }
        }
    }


    let entries = Object.entries(object)

    let sortedByCountry = entries.sort((a, b) => a[0].localeCompare(b[0]))


    for (let line of sortedByCountry) {
        let result = '';

        let entries = Object.entries(line[1]);

        result += `${line[0]} -> `

        let sortByPrice = entries.sort((a, b) => a[1] - b[1]);


        for (let el of sortByPrice) {
            result += `${el[0]} -> ${el[1]} `
        }

        console.log(result)

    }

}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    
)