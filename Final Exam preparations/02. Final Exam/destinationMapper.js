function destinationMapper (string) {

let pattern = /([=|\/])(?<place>[A-Z][A-za-z]{2,})\1/g;
let destination = [];
let points = 0;
let matches = pattern.exec(string);

while(matches !== null){
    
    let place = matches.groups.place
    let currentPoints = Number(place.length);
    points += currentPoints;
    destination.push(place);
    matches = pattern.exec(string);
}

console.log(`Destinations: ${destination.join(', ')}`);
console.log(`Travel Points: ${points}`)

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")