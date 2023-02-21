import { Foundation, Pile, suits, Waste, faces, colors, Stock } from "./card";
import { createDeck } from "./util";

start ();

function start() {
    const state = {
        stock: new Stock(),
        waste: new Waste(),
        foundations: {
            [suits.Clubs]: new Foundation([].suits.Clubs),
            [suits.Diamond]: new Foundation([].suits.Diamond),
            [suits.Hearts]: new Foundation([].suits.Hearts),
            [suits.Spades]: new Foundation([].suits.Spades)
        },
        piles: [
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile()

        ]
    }
    const deck = createDeck();
    console.log(deck)
}

function shuffleDeck(deck) {
    const stock = [];
}
