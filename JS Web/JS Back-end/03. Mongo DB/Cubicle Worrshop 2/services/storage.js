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
        //data = JSON.parse(await fs.readFile('./models/data.json')) //пътя е релативен спрямо index.js/като го прочетем ще бъде json, затова го парсваме
    } catch(err) {
        console.error('Error reading database')
    }
    
    return (req,res,next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit
        }
        next(); 
    }
        
    
}

    
    async function getAll() { //зареждане на всички данни
        //let cubes =  Object.entries(data).map(([id,v]) => Object.assign({}, {id}, v)); //в празния обект ще сложи ключа -- ид-то и всички стойности
        const cubes = Cube.find({}).lean(); //зареждаме всички кубчета от базата данни
        //проверяваме дали се търси по всички критерии
        // if(query.search) {
        //     cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()))
        // }
        // if(query.from) {
        //     cubes = cubes.filter(c => c.difficulty >= Number(query.from));
        // }
        // if(query.to) {
        //     cubes = cubes.filter(c => c.difficulty <= Number(query.to));
        // }
        //console.log(cubes)
        return cubes;
    }

    async function getById(id) {
        const cube = await Cube.findById(id).lean();
        if(cube) {
            return cube;
        } else {
            return undefined;
        }  
    }

    async function create(cube) {
        const record = new Cube(cube);
        return record.save();
    }

    async function edit(id,cube) {
        const existing = await Cube.findById(id) //намираме кубчето, която ще редактираме
        console.log(existing)
        if(!existing) {
            throw new ReferenceError('No such ID in database'); //проверяваме дали го има и ако го няма хвърляме грешка
        }
        Object.assign(existing,cube) //всички свойства от cube ще ги сложи на existing
        //console.log(existing)
        return existing.save();
    }
      
    
    module.exports = {
        init,
        getAll,
        getById,
        create,
        edit
    }
    