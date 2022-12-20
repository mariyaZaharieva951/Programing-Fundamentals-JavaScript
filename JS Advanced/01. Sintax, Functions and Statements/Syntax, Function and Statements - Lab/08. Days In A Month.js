function daysInAMonth(month, year) {

let d = new Date(year,month,0);

let daysOfMonth = d.getDate();

console.log(daysOfMonth)
}

daysInAMonth(2, 2012)