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

async function create(roomData) {
    const room = {
        id: getId(),
        name: roomData.name,
        description: roomData.description,
        city: roomData.city,
        beds: Number(roomData.beds),
        price: Number(roomData.price),
        imgUrl: roomData.imgUrl
    }
    const missing = Object.entries(room).filter(([k,v]) => !v)
    if(missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }

    data.push(room);
    await persist();

    return room;
}

function getId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6)
}


module.exports = {
    getAll,
    getById,
    create
}