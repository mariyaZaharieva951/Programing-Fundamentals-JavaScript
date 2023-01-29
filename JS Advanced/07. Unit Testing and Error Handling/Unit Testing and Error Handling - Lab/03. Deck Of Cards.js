function printDeckOfCards(cards) {

    let result = [];

    for(let oneCard of cards){
        let suit = oneCard.slice(-1);
        let face = oneCard.slice(0,-1);
        let card = "";
    

    try{
        card = createCard(face, suit);
        result.push(card);
    }catch(err){
        result = [`Invalid card: ${oneCard}`]
    }
    }
    function createCard (face, suit){
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
      
  }
  
printDeckOfCards(['AS', '10D', 'KH', '2C'])