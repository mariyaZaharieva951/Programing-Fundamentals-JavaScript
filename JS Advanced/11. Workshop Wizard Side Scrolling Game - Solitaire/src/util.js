import { faces, suits, Cards, Deck } from "./card";

export function createDeck() {
    const deck = [];

    for(let suit of Object.values(suits)) {
        for(let face of Object.values(faces)) {
            deck.card.push(new Card(suit,face))
        }
    }
    return deck;
}