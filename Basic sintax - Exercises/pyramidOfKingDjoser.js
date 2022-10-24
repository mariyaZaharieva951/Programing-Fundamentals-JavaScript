function kingDjoser (par1, par2) {

let width = Number(par1);
let length = width;
let height = Number(par2);
let sizeBlock = 1 * 1;
let step = width * length;
let countBlocks = step / sizeBlock;
let counterStep =0;
let totalStones = 0;
let totalMarbels = 0;
let totalLapisLazuli = 0;
let totalGold = 0;

for(let i = par1; i >= par2; i-=2) {
    width = Number(i);
    length = width;
    counterStep++;
    let stones = (width - 2)*(width-2) * height;
    totalStones += stones;

if (i === 1 || i === 2) {
        let gold = width * length * height;
        totalGold += gold;
        totalStones -= gold;
} else if (counterStep % 5 !== 0) { 
    let marbels = (4 * width - 4)  * height;
    totalMarbels += marbels;
} else if (counterStep % 5 === 0) {
    let lapisLazuli = (4 * width - 4)  * height;
    totalLapisLazuli += lapisLazuli;
} 

}

console.log(`Stone required: ${Math.ceil(totalStones)}`);
console.log(`Marble required: ${Math.ceil(totalMarbels)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
console.log(`Gold required: ${Math.ceil(totalGold)}`);
console.log(`Final pyramid height: ${Math.floor(counterStep * height)}`)


}

kingDjoser (11,
    1
    )