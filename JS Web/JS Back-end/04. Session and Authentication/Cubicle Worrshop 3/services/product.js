const Cube = require('../models/Cube');
const Comment = require('../models/Comment');

async function getAll(query) { //зареждане на всички данни
    //let cubes =  Object.entries(data).map(([id,v]) => Object.assign({}, {id}, v)); //в празния обект ще сложи ключа -- ид-то и всички стойности
    //const cubes = Cube.find({}).lean(); //зареждаме всички кубчета от базата данни
    const options = {};
    
    //проверяваме дали се търси по всички критерии
    
    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficulty = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficulty = options.difficulty || {};
        options.difficulty.$lte = Number(query.to);
    }

    const cubes = Cube.find(options).lean();

    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).populate('comments').populate('accessories').lean();
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
    //console.log(existing)
    if(!existing) {
        throw new ReferenceError('No such ID in database'); //проверяваме дали го има и ако го няма хвърляме грешка
    }
    Object.assign(existing,cube) //всички свойства от cube ще ги сложи на existing
    //console.log(existing)
    return existing.save();
}
  
async function createComment(cubeId,comment) {
    const cube = await Cube.findById(cubeId) //намираме кубчето, която ще редактираме
    
    if(!cube) {
        throw new ReferenceError('No such ID in database'); //проверяваме дали го има и ако го няма хвърляме грешка
    }
    const newComment = new Comment(comment);
    await newComment.save();
    cube.comments.push(newComment);
    await cube.save();
}



async function attachStickers(cubeId,stickerId) {
    const cube = await Cube.findById(cubeId);
    const sticker = await Accessory.findById(stickerId);

    if(!cube || !sticker) {
        throw new ReferenceError('No such ID in database')
    }

    cube.accessories.push(sticker);
    return cube.save();
}


module.exports = {
    getAll,
    getById,
    create,
    edit,
    createComment,
    attachStickers
}