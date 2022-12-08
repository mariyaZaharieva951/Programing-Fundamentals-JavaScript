function worldTour(input) {

    let places = input.shift();

    let index = 0;
    let line = input[index];

    while (line !== 'Travel') {
        line = line.split(':');


        let command = line.shift();

        if (command === 'Add Stop') {
            let index = Number(line[0]);
            let place = line[1];

            if (index >= 0 && index < places.length) {
                let start = places.substring(0, index);
                let end = places.substring(index);
                places = start + place + end;
            }
            console.log(places);
            
        } else if (command === 'Remove Stop') {
            let index1 = Number(line[0]);
            let index2 = Number(line[1]);

            if (index1 >= 0 && index1 < places.length && index2 >= 0 && index2 < places.length) {
                let start = places.substring(0, index1);
                let end = places.substring(index2 + 1);
                places = start + end; 
            }
            console.log(places);

        } else if (command === 'Switch') {
            let oldPlace = line[0];
            let newPlace = line[1];
            if (places.includes(oldPlace)) {
                places = places.replace(oldPlace, newPlace);    
            }
            console.log(places)
        }
        index++;
        line = input[index];
    }
    console.log(`Ready for world tour! Planned stops: ${places}`)
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]
)