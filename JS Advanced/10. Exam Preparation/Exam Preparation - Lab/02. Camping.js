class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        if(this.listOfParticipants.find((x) => x.name === name)) {
            return `The ${name} is already registered at the camp.`
        }
        if(this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        let participant = {name, condition, power:100, wins:0}
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`
    }
    
    unregisterParticipant(name) {
            if(!this.listOfParticipants.some((line) => line.name === name)){
                throw new Error(`The ${name} is not registered in the camp.`);
            } 
            this.listOfParticipants = this.listOfParticipants.filter((line) => line.name !== name);
            return `The ${name} removed successfully.`  
    }
    
    timeToPlay (typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find((x) => x.name === participant1);
        let player2 = this.listOfParticipants.find((x) => x.name === participant2);
        if(typeOfGame === 'WaterBalloonFights') {
            if(!player1 || !player2) {
                throw new Error(`Invalid entered name/s.`);
            }
            if(player1.condition !== player2.condition){
                throw new Error(`Choose players with equal condition.`)
            }
            if(player1.power > player2.power) {
                player1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if(player1.power < player2.power) {
                player2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {return `There is no winner.`
        }
                
        } else if(typeOfGame === 'Battleship') {
            if(!player1) {
                throw new Error(`Invalid entered name/s.`);
            }
            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
        let sortedList = this.listOfParticipants.sort((a,b) => b.wins - a.wins);
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`) ;
        for(let line of sortedList) {
            result.push(`${line.name} - ${line.condition} - ${line.power} - ${line.wins}`)
        }
        return result.join('\n');
    }
    
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Sa Dickinson", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString())

