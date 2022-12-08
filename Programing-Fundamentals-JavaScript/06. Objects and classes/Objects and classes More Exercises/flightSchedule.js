function flightSchedule (array) {

let flights = array[0];
let newStatus = array[1];
let myFlyght = array[2].join('');

let object = {};

for(let line of flights) {
    line = line.split(' ');
    let flight = line.shift();
    let city = line.join('');
    object[flight] = { Destination: city, Status: 'Ready to fly'};
}

for(let line of newStatus) {
    line = line.split(' ');
    let flight = line.shift();
    let status = line.join('');

    if(object.hasOwnProperty(flight)){
        let city = object[flight].Destination;
        object[flight] = { Destination: city, Status: `${status}`};
    } else{continue}
}

if(myFlyght === 'Ready to fly'){
    for(let key in object){
        if(object[key].Status !== 'Cancelled'){
            console.log(object[key]);
        }
    }
}else {for(let key in object){
    if(object[key].Status === 'Cancelled'){
        console.log(object[key])
    }
    
}
}
}

flightSchedule ([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]


)