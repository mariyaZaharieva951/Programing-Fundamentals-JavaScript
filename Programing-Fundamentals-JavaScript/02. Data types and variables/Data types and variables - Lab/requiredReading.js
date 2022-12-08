function requiredReading (pagesOfBook, pagesReadForHour, daysForRead) {

let pagesOfDay = pagesOfBook / daysForRead;
let hours = pagesOfDay / pagesReadForHour;

console.log(hours);
}

requiredReading (432,
    15 ,
    4 
    )