function teamAccount(array) {

    let games = array[0];
    games = games.split(" ");


    let command = '';
    let game = '';

    for (let i = 1; i < array.length; i++) {
        let word = array[i];
        if (word !== 'Play!') {
            word = array[i];
            word = word.split(" ");
            command = word[0];
            game = word[1];
            switch (command) {
                case "Install":
                    if (games.includes(game)) {
                        break;
                    } else { games.push(game); }
                    break;
                case "Uninstall":
                    if (games.includes(game)) {
                        for (let j = 0; j < games.length; j++) {
                            let currentGame = games[j];
                            if (game === currentGame) {
                                games.splice(j, 1);
                                break;
                            }
                        }
                    }
                    break;
                case "Update":
                    if (games.includes(game)) {
                        for (let j = 0; j < games.length; j++) {
                            let currentGame = games[j];
                            if (game === currentGame) {
                                games.splice(j, 1);
                                games.push(game);
                                break;
                            }
                        }
                    } break;
                case "Expansion":
                    game = game.split("-");
                    //games.split("-");
                    let fundGame = game[0];
                    let expansion = game[1];
                    if (games.includes(fundGame)) {
                        for (let j = 0; j < games.length; j++) {
                            currentGame = games[j];
                            if (currentGame === fundGame) {
                                games.splice(j + 1, 0, `${fundGame}:${expansion}`);
                                break;
                            }
                        }
                    }
                    break;
            }
        } else { break; }

    }
    console.log(games.join(' '))
}

teamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])
