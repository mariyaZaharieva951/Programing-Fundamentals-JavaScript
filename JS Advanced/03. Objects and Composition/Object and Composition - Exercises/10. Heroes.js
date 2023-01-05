function solve() {

let fighter = (name) => {
    let state = {
        name,
        health: 100,
        stamina: 100
    }
    return Object.assign(state, canFight(state))
}

let mage = (name) => {
    let state = {
        name,
        health: 100,
        mana: 100
    }
    return Object.assign(state, canMage(state))
}
let canFight = (state) => ({
    fight: () => {
        console.log(`${state.name} slashes at the foe!`);
        state.stamina--;
    }
})
let canMage = (state) => ({
    cast: (spell) => {
        console.log(`${state.name} cast ${spell}`);
        state.mana--;
    }
})

let result = {
    mage: mage,
    fighter: fighter
}
return result
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
