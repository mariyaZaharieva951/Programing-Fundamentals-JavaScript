function spiceMustFlow(num) {

    let startingYield = Number(num);
    let yieldPerDay = startingYield;
    let totalYield = 0;
    let days = 0;

    while (startingYield >= 100) {
        days++;
        totalYield += (startingYield - 26);
        yieldPerDay -= 10;
        startingYield = yieldPerDay;
    }
    if (startingYield < 100) {
        if(totalYield < 26){
            totalYield = 0;
        } else{
        totalYield -= 26;
    }
    }
    console.log(days);
    console.log(totalYield)
}

spiceMustFlow(0)