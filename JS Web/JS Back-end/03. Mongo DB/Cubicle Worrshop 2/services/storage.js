//load and parse data file
//provide ability to:
//-read all entries
//-read single antry by ID
//-add new entry
//*get matching entries by search criteria

const Cube = require('../models/Cube')
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

    
    async function getAll(query) { //зареждане на всички данни
        //return Object.entries(data).map(([id,v]) => Object.assign({}, {id}, v)); //в празния обект ще сложи ключа -- ид-то и всички стойности
        const cubes = Cube.find({}).lean();

        return cubes;
    }

    async function getById(id) {
        const cube = await Cube.findById(id)

        return cube;
    }

    async function create(cube) {
        const record = new Cube(cube);
        return record.save();
    }
      
    
    module.exports = {
        init,
        getAll,
        getById,
        create
    }
    