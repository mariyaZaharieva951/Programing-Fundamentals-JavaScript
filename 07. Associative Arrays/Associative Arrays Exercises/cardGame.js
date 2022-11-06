function cardGame(array) {

    let workObject = {};
    let result = {};
    
    for(let i = 0; i < array.length; i++) {
        let currentArr = array[i];
        let [name, cards] = currentArr.split(': ');
        if(!workObject.hasOwnProperty(name)) {
            workObject[name] = cards;
        } else{ workObject[name] +=`, ${cards}`;}
    }
    
    for (let line of Object.entries(workObject)) {
        let name = line[0];
        let cards = line[1].split(', ');
        let object = {};
        for(let card of cards) {
            
            let power = '';
            let type = '';
            
            if(!object.hasOwnProperty(card)){
                object[card] = 0;
            if(card.length > 2){
                power = card.slice(0,2);
                type = card[2];
            } else {
                [power, type] = card.split('');
        }
        } else{continue;}
        if (power.charCodeAt() >= 48 && power.charCodeAt() <= 57) {
            power = Number(power);
        } else if (power === 'J') {
            power = 11;
        } else if (power === 'Q') {
            power = 12;
        } else if (power === 'K') {
            power = 13;
        } else if (power === 'A') {
            power = 14;
        }
        
        if (type === 'S') {
            type = 4;
        } else if (type === 'H') {
            type = 3;
        } else if (type === 'D') {
            type = 2;
        } else if (type === 'C') {
            type = 1;
        }
           let value = power * type;
           object[card] = value;
        }
        let valueCard = 0;
    for(let kvp of Object.entries(object))  {
        valueCard += Number(kvp[1]);
    } 
    if(!result.hasOwnProperty(name)) {
        result[name] = valueCard;
    } else{
        result[name] += valueCard;
    }  
    }
    for(let key in result){
        console.log(`${key}: ${result[key]}`)
    }
    

}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    
)