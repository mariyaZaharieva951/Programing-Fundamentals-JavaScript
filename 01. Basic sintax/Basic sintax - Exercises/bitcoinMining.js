function bitcoinMining(array) {

    let gold = 0;
    let totalGold = 0;
    let bitcoin = 11949.16;
    let gramGold = 67.51;
    let lv = 0;
    let thief = 0;
    let countBit = 0;
    let counter = 0;
    let dayBuy = 0;

    for (let i = 0; i < array.length; i++) {
        let day = i + 1;
        gold = array[i];

        if (day % 3 === 0) {
            thief = gold * 0.3;
        }
        lv += (gold - thief) * 67.51;

        if (lv >= bitcoin) {
            countBit = Math.floor(lv / bitcoin);
            counter += countBit;
            lv = lv - countBit * bitcoin;
            gold = lv / gramGold;
        }
        if(counter === 1) {
            dayBuy = day;}


    }
    if (countBit > 0) {
        console.log(`Bought bitcoins: ${counter}`);
        console.log(`Day of the first purchased bitcoin: ${dayBuy}`);
        console.log(`Left money: ${lv.toFixed(2)} lv.`);
    } else if (countBit === 0) {
        console.log(`Bought bitcoins: ${counter}`);
        console.log(`Left money: ${lv.toFixed(2)} lv.`);

    }
}

bitcoinMining([100, 200, 300])