function meetings(array) {

    let object = {};
    let meetingDay = '';

for(let line of array) {
    let[day, name] = line.split(' ');
    if(object.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
        continue;
    } else {console.log(`Scheduled for ${day}`)}
    meetingDay = day; 
    object[day] = name;
}
for(let el in object){
    console.log(`${el} -> ${object[el]}`)
}

}

meetings (['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
