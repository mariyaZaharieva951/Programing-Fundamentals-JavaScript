const { isUser } = require('../middlewares/guards');
const { getAllPlays } = require('../services/play');
const { parseError } = require('../utils/parsers');

const router = require('express').Router();


router.get('/create', isUser(), (req,res) => {
    res.render('play/create')
});

router.post('/create', isUser(), async (req,res) => {
    //console.log(req.body);
    try {
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            public: Boolean(req.body.public),
            author: req.user._id
        }
        const play = await req.storage.createPlay(playData);
        
        res.redirect('/')
    } catch(err) {
        console.log(err.message)
        const ctx = {
            errors: parseError(err),
            playData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public)  
            }
        }
        res.render('theater/create',ctx)
    }
    
    
    //res.redirect('/play/create');
});

router.get('/details/:id', async (req,res) => {
    try {
    const play = await req.storage.getPlayById(req.params.id);
    console.log(play)
    play.hasUser = Boolean(req.user);
    play.isAuthor = req.user && req.user._id == play.author;
    play.liked = req.user && play.userLiked.includes(req.user._id)
    
    res.render('play/details', {play})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }
    
    
});

router.get('/delete/:id', async (req,res) => {
    try {
        await req.storage.deletePlay(req.params.id);
        res.redirect('/');
    } catch(err) {
        console.log(err.message);
        res.redirect('play/details/' + req.params.id)
    }
});


router.get('/edit:id', async (req,res) => {
    // try {
    //     await req.storage.deletePlay(req.params.id);
    //     res.redirect('/');
    // } catch(err) {
    //     console.log(err.message);
    //     res.redirect('play/details/' + req.params.id)
    // }
});



module.exports = router;