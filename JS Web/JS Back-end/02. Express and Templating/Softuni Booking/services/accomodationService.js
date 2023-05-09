const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./models/data.json')); //създаваме променлива, която да зареди съдържанието на файла data.json

async function persist() {  //записва промените във файла (напромер ако добавяме нови стаи). Ще я викаме при всяка промяна
    return new Promise((res,rej) => {
        fs.writeFile('./models/data.json', JSON.stringify(data), (err) => { //върху съществуващия файл записваме съдържанието на data.json
            if(err == null) {
                res();
            } else {
                rej(err)
            }
        })
    })
}

function getAll() {
    return data
}

function getById(id) {
    return data.find(i => i.id == id);
}


module.exports = {
    getAll,
    getById
}