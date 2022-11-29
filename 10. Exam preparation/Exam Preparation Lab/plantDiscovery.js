function plantDiscovery (input) {

    let object = {};
let n = Number(input.shift());

for(let i = 0; i < n; i++){
    let line = input[i].split('<->');
    let plant = line[0];
    let rarity = Number(line[1]);
    if(!object.hasOwnProperty(plant)){
        object[plant] = {rarity: rarity, rating: []};
    } else{object[plant].rarity += rarity;   
}
}
input = input.slice(n);
let line = input.shift();
while(line !== 'Exhibition'){
    line = line.split(': ');
    let command = line.shift();
    line = line[0].split(' - ');

    if(command === 'Rate'){
        let plant = line[0];
        let rating = Number(line[1]);
        if(object.hasOwnProperty(plant)){
            object[plant].rating.push(rating);
        } else{console.log('error')}
    } else if(command === 'Update') {
        let plant = line[0];
        let rarity = Number(line[1]);
        if(object.hasOwnProperty(plant)){
            object[plant].rarity = rarity;
        } else{console.log('error')}

    } else if(command === 'Reset') {
        let plant = line[0];
        if(object.hasOwnProperty(plant)){
            object[plant].rating = [];
        } else{console.log('error')}
    }
    line = input.shift();
}

let entries = Object.entries(object);

console.log(`Plants for the exhibition:`)

for(let line of entries){
    let averageRating = 0;
    if(line[1].rating.length > 0){
        let sumOfrating = 0;
        let count = 0;
        for(rating of line[1].rating){
            sumOfrating += rating;
            count++;
        }
        averageRating = sumOfrating / count; 
    }
    console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${averageRating.toFixed(2)}`)
}

}

plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
)