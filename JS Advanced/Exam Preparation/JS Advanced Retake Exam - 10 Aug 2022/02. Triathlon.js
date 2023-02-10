class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }
    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            return `${participantName} is not in the current participants list`
        }
        if(condition < 30) {
            throw new Error (`${participantName} is not well prepared and cannot finish any discipline`);
        }
        let completedCount = Math.floor(condition / 30);
        if(completedCount === 1 || completedCount === 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }
        let gender = this.participants[participantName]
        delete this.participants[participantName];
        this.listOfFinalists.push({participantName, gender});
        return `Congratulations, ${participantName} finished the whole competition`
    }
    rewarding (participantName) {
        if(!this.listOfFinalists.some((line) => line.participantName === participantName)) {
            return `${participantName} is not in the current finalists list`
        }
        return `${participantName} was rewarded with a trophy for his performance`
    }
    showRecord (criteria) {
        if(this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`
        }
        let fyrstlyAdded = this.listOfFinalists.find((line) => line.gender === 'male' || line.gender === 'female');
        
        if(!fyrstlyAdded) {
            return `There are no ${participantGender}'s that finished the competition`
        } 
        if(fyrstlyAdded && criteria !== 'all'){ 
            return `${fyrstlyAdded.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;}

        if(criteria === 'all') {
            let result = [];
            result.push(`List of all ${this.competitionName} finalists:`);
            let sorted = this.listOfFinalists.sort((a,b) => a.participantName.localeCompare(b.participantName));
            for(let line of Object.entries(sorted)) {
                result.push(line[1].participantName)
            }
            return result.join('\n')
        }  
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Mariya", "female"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Mariya", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("male"));
