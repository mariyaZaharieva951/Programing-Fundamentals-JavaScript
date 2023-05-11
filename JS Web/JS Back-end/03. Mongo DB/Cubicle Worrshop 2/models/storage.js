//load and parse data file
//provide ability to:
//-read all entries
//-read single antry by ID
//-add new entry
//*get matching entries by search criteria

const fs = require('fs/promises') //за да работим с промиси
const uniqid = require('uniqid');

let data = {};

/* модел:
"asdf1234": {
        "Name": "string",
        "Description": "string",
        "Image URL": "string",
        "DIfficulty": "Level"
    }
    */

async function init() { //зареждане на дата файла
    try {
        data = JSON.parse(await fs.readFile('./models/data.json')) //пътя е релативен спрямо index.js/като го прочетем ще бъде json, затова го парсваме
    } catch(err) {
        console.error('Error reading database')
    }
    
    return (req,res,next) => {
        req.storage = {
            getAll,
            getById,
            create
        }
        next(); 
    }
        
    
}

    
    async function getAll() { //зареждане на всички данни
        return Object.entries(data).map(([id,v]) => Object.assign({}, {id}, v)); //в празния обект ще сложи ключа -- ид-то и всички стойности
    }

    async function getById(id) {
        return data[id];
    }

    async function create(cube) {
        const id = uniqid();
        data[id] = cube;
        try {
            await fs.writeFile('./models/data.json', JSON.stringify(data,null,2))
            console.log('created new record')
        } catch(err) {
            console.error('Error writing out database')
        }
        }
       
    module.exports = {
        init,
        getAll,
        getById,
        create
    }
    