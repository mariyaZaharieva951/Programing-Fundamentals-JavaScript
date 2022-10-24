function dungeonestDark(array) {

    let healt = 100;
    let coins = 0;
    let monster = '';
    let isFinish = true;


    input = array[0];
    input = input.split("|");

    for (let j = 0; j < input.length; j++) {
        let roomContains = input[j];
        roomContains = roomContains.split(" ");
        let item = roomContains[0];
        let num = Number(roomContains[1]);

        if (item === "potion") {
            let currentHelt = healt;
            healt += num;
            if(healt > 100) {
                healt = 100;
            } console.log(`You healed for ${Math.abs(currentHelt - healt)} hp.`);
            console.log(`Current health: ${healt} hp.`);
            continue;
        } else if (item === "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);
            continue;
        } else {
            monster = item;
            healt -= num;
        }
        if (healt > 0) {
            console.log(`You slayed ${monster}.`)
        } else {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${j + 1}`);
            isFinish = false;
            break;
        }
    }
    if (isFinish) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${healt}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])