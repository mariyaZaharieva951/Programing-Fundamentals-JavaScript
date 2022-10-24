function gladiatorExpenses (p1, p2, p3, p4, p5) {

    let lostFightCount = Number(p1);
    let helmetPrice = Number(p2);
    let swordPrice = Number(p3);
    let shieldPrice = Number(p4);
    let armorPrice = Number(p5);

    let expenses = 0;
    let counterShield = 0;

for (let fight = 1; fight <= lostFightCount; fight++) {
    if(fight % 2 === 0) {
        expenses += helmetPrice;
    }
    if(fight % 3 === 0) {
        expenses += swordPrice;
        
    }
    if(fight % 2 === 0 && fight % 3 === 0) {
        expenses += shieldPrice;
        
        counterShield++;
        if (counterShield % 2 === 0) {
            expenses += armorPrice
        }
    }

}


console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses (23,
12.50,
21.50,
40,
200)
