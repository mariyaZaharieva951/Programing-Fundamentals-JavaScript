class SummerCamp {
    constructor(organizer,location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {child: 150, student: 300, collegian: 500};
        this.listOfParticipants = [];
    }   
    registerParticipant(name, condition, money) {
        let foundParticipant = this.listOfParticipants.find((x) => x.name === name);
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error ("Unsuccessful registration at the camp.");
        }
        if(foundParticipant){
        return `The ${name} is already registered at the camp.`;
        }
        if(this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({name:name, condition:condition, power:100, wins:0});
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {
    let foundParticipant = this.listOfParticipants.find((x) => x.name === name);
        if(!foundParticipant) {
            throw new Error (`The ${name} is not registered in the camp.`);
        }
        let index = this.listOfParticipants.indexOf(foundParticipant);
        let remove = this.listOfParticipants.splice(index,1);
        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, participant1, participant2) {
            let foundParticipant1 = this.listOfParticipants.find((x) => x.name === participant1);
            let foundParticipant2 = this.listOfParticipants.find((x) => x.name === participant2);
        if(typeOfGame === "WaterBalloonFights") {
            if(!foundParticipant1 || !foundParticipant2) {
                throw new Error (`Invalid entered name/s.`)
            }
            if(foundParticipant1.condition !== foundParticipant2.condition) {
                throw new Error (`Choose players with equal condition.`)
            }
            if(foundParticipant1.power > foundParticipant2.power) {
                foundParticipant1.wins += 1;
                return `The ${foundParticipant1.name} is winner in the game ${typeOfGame}.`
            }
            if(foundParticipant1.power < foundParticipant2.power) {
                foundParticipant2.wins += 1;
                return `The ${foundParticipant2} is winner in the game ${typeOfGame}.`
            } 
            return `There is no winner.`   
        } if(typeOfGame === "Battleship") {
            foundParticipant1.power += 20;
            return `The ${foundParticipant1.name} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins);
        sorted.forEach((x) => {
            return result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
        });
        return result.join('\n');

    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
//console.log(summerCamp.unregisterParticipant("Sara Dickinson"));
//console.log(summerCamp.unregisterParticipant("Jane Pater"));

//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
