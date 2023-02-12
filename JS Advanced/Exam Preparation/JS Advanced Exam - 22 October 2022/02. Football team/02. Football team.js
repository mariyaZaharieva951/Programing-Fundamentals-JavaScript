class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let players = [];
        for (let line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');
            playerValue = Number(playerValue)

            let foundName = this.invitedPlayers.find((el) => el.name === name)
            if (foundName) {
                if (foundName.playerValue < playerValue) {
                    foundName.playerValue = playerValue;
                }
            }
            this.invitedPlayers.push({ name: name, age: age, playerValue: playerValue });
            if (!players.includes(name)) {
                players.push(name);
            }
        }
        return `You successfully invite ${players.join(', ')}.`
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let foundName = this.invitedPlayers.find((el) => el.name === name)
        if (!foundName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (foundName.playerValue > playerOffer) {
            return `The manager's offer is not enough to sign a contract with ${name}, ${foundName.playerValue - playerOffer} million more are needed to sign the contract!`
        }
        foundName.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        let foundName = this.invitedPlayers.find((el) => el.name === name)
        if (!foundName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (foundName.age < age) {
            let ageDifference = age - foundName.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else { return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!` }
        } else { return `${name} is above age limit!` }

    }
    transferWindowResult() {
        let result = [];
        result.push(`Players list:`);
        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        for (let line of Object.entries(sorted)) {
            result.push(`Player ${line[1].name}-${line[1].playerValue}`)
        }
        return result.join('\n')

    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));

console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.transferWindowResult());
