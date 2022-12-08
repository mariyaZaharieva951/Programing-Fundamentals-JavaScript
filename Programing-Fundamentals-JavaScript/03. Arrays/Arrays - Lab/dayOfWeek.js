function dayOfWeek (num) {

    let day = '';
if (num >= 1 && num <= 7) {
    let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    for(let i = 0; i < array.length - 1; i++) {
        day = array[num - 1];
        console.log(day);
        break;
    }
} else {console.log(`Invalid day!`)}
}

dayOfWeek (7)