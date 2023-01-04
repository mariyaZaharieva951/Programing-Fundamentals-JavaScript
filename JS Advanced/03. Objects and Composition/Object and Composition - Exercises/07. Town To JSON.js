function townToJson(array) {

    let tableRow = array.shift();
    tableRow = tableRow.substring(2, tableRow.length - 2);
    let [townTab, latitudeTab, longitudeTab] = tableRow.split(' | ');
    let result = [];

    for (let row of array) {
        let object = {};
        row = row.substring(2, row.length - 2);
        row = row.split('| ');

        let town = row[0].trim();
        let latitude = Number(row[1]).toFixed(2);
        let longitude = Number(row[2]).toFixed(2);

        object[townTab] = town;
        object[latitudeTab] = Number(latitude);
        object[longitudeTab] = Number(longitude);

        result.push(object);
    }

    console.log(JSON.stringify(result))

}

townToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)