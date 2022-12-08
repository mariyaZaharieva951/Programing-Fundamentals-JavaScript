function train (arr) {

let wagon = arr[0];
wagon = wagon.split(' ');

let maxPeopleInWagon = Number(arr[1]);

for(let i = 2; i < arr.length; i++) {
    let currentArr = arr[i];
    currentArr = currentArr.split(' ');

    let command = currentArr[0];

    if(command === 'Add') {
        let newWagon = currentArr[1];
        wagon.push(newWagon);
    } else {let people = Number(command);
    
        for(let j = 0; j < wagon.length; j++) {
            let currentSeats = Number(wagon[j]);
            let freeSeats = maxPeopleInWagon - currentSeats;
            if(freeSeats >= people) {
                currentSeats += people;
                wagon.splice(j,1,currentSeats)
                break;
            }
        }
    
    }
}
console.log(wagon.join(' '))
}

train (['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])
