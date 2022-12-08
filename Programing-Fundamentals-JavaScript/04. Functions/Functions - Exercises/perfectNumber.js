function perfectNumber(number) {


    let halfNumber = number / 2;

   // let sumDivisiors = 0;

    if (number % 2 !== 0) {
        console.log(`It's not so perfect.`);
        return
    }
    let divisorNum = 1;
    let sumDivisiors = divisorNum;

    for (let divisor = divisorNum + 1; divisor <= halfNumber; divisor++) {
            

        if (number % divisor === 0) {
            sumDivisiors += divisor;//28 1 2 4 7 14
        }
    }
    if (sumDivisiors === number) {
        console.log(`We have a perfect number!`)
    } else {console.log(`It's not so perfect.`)}


}

perfectNumber()