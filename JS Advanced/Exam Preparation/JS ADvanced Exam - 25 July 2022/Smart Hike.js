class SmartHike {
    constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = []; 
    this.resources = 100;
    }
    addGoal (peak, altitude) {
            if(this.goals.hasOwnProperty(peak)) {
                return `${peak} has already been added to your goals`;
            }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }
    hike (peak, time, difficultyLevel) {
        if(!this.goals.hasOwnProperty(peak)) {
    throw new Error (`${peak} is not in your current goals`)
        }
        if(this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        let diff = time*10;
        if(this.resources - diff < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources -= diff;
        this.listOfHikes.push({peak:peak, time:time, difficultyLevel:difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest (time) {
        this.resources += time * 10; 
        if(this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`
    }
    showRecord (criteria) {
        if(this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria === 'easy' || criteria === 'hard'){
        let hikes = this.listOfHikes.filter((x) => x.difficultyLevel === criteria);
        if(hikes.length === 0) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }
        let sortHikes = hikes.sort((a,b) => b.time - a.time);
        let bestHike = sortHikes.shift();
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        }
        let result = ["All hiking records:"];
        this.listOfHikes.forEach(line => {
            result.push(`${this.username} hiked ${line.peak} for ${line.time} hours`)
        });
        return result.join('\n')
    }

}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
console.log(user.showRecord('all'));
user.addGoal('Rui', 1706);
console.log(user.showRecord('all'));
user.hike("Musala", 8, "hard");
console.log(user.showRecord('all'));
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));




