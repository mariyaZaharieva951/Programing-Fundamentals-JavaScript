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
        result = [`Invalid card: ${oneCard}`];
    }
    }
    console.log(result.join(' '));

    function createCard (face, suit){
        let validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        let validSuit = {                     
            S: "\u2660",                    
            H: "\u2665",                        
            D: "\u2666",                    
            C: "\u2663",                    
        };
    
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