function playingCard(face, suit) {

    let validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let validSuit = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }

    let card = {
        face,
        suit: validSuit[suit],
        toString() {
            return this.face + this.suit
        }
    }

    if (!validFace.includes(face)) {
        throw new Error("Invalid face: " + face);
    }
    if (!validSuit.hasOwnProperty(suit)) {
        throw new Error("Invalid suit: " + suit);
    }
    return card
}

console.log(playingCard('A', 'S'))
//playingCard('A', '5')