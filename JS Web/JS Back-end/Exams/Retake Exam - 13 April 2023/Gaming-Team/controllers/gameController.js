const { createGame } = require('../services/gameService');
const { parseError } = require('../utils/parser');

const routes = require('express').Router();


routes.get('/create', (req,res) => {
    res.render('create');
});

// routes.post('/create', async (req,res) => {
//    try {
//     const gameData = {
//         name: req.body.name,
//         image: req.body.image,
//         price: req.body.price,
//         description: req.body.description,
//         genre: req.body.genre,
//         platform: req.body.platform,
//         boughtBy: [],
//         owner: req.user._id
//     }
//     const games = await createGame(gameData);

//     res.redirect('/game/catalog')

//    } catch(error) {
//     const errors = parseError(error);
//     console.error(error.message);
//     res.render('create', {
//         title: 'Create page',
//         errors,
//         body: {
//             username: req.body.username
//         }
//     })
//    }
   
   
//     res.render('create');
// });