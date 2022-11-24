function plantDiscovery(input) {

    let object = {};
    let n = Number(input.shift());


    for (let i = 0; i < n; i++) {
        let line = input[i].split('<->');
        let plant = line[0];
        let rarity = Number(line[1]);
        if (!object.hasOwnProperty(plant)) {
            object[plant] = { rarity: rarity, rating: [] }
        } else {
            object[plant].rarity += rarity;
        }
    }
    let index = n;

    while (input[index] !== 'Exhibition') {
        let line = input[index].split(': ')
        let command = line.shift();

        if (command === 'Rate') {
            let [plant, rating] = line[0].split(' - ');
            if (object.hasOwnProperty(plant)) {
                object[plant].rating.push(Number(rating));
            } else { console.log(`error`) }
        } else if (command === 'Update') {
            let [plant, rarity] = line[0].split(' - ');
            if (object.hasOwnProperty(plant)) {
                object[plant].rarity = Number(rarity);
            } else { console.log(`error`) }
        } else if (command === 'Reset') {
            let plant = line[0];
            if (object.hasOwnProperty(plant)) {
                object[plant].rating = [0];
            } else { console.log(`error`) }
        }

        index++;
    }
    let entries = Object.entries(object);
    console.log(`Plants for the exhibition:`)
    for (let line of entries) {

        let sumOfRating = 0;
        let counterRating = 0;
        let averageRating = 0;
        for (let rating of line[1].rating) {
            if (rating === 0) {
                averageRating = 0;

            } else {
                counterRating++;
                sumOfRating += rating;
                averageRating = sumOfRating / counterRating;
            }

        }
        console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${averageRating.toFixed(2)}`)
    }

}
plantDiscovery((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

)