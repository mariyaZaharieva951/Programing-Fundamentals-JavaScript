const { default: mongoose } = require('mongoose');
const { isUser } = require('../middlewares/guards');
const { getAllPlays, getPlayById } = require('../services/play');
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
        res.render('play/create',ctx)
    }
    
});

router.get('/details/:id', async (req,res) => {
    try {
    const play = await req.storage.getPlayById(req.params.id);

    play.hasUser = Boolean(req.user);
    
    play.isAuthor = req.user && req.user._id == play.author;
    
    play.liked = req.user && play.userLiked.find(u => u._id == req.user._id)
    
    res.render('play/details', {play})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }
    
    
});

router.get('/delete/:id', isUser(), async (req,res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        
        if(play.author != req.user._id) {
            throw new Error('Cannot delete play you haven\'t created!')
        }
        await req.storage.deletePlay(req.params.id);
        res.redirect('/');
    } catch(err) {
        console.log(err.message);
        res.redirect('play/details/' + req.params.id)
    }
});


router.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        
        if(play.author != req.user._id) {
            throw new Error('Cannot edit play you haven\'t created!')
        }
        
        res.render('play/edit', {play})
    } catch(err) {
        console.log(err.message);
        res.redirect('/play/details/' + req.params.id)
    }
});

router.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if(play.author != req.user._id) {
            throw new Error('Cannot edit play you haven\'t created!')
        }
        await req.storage.editPlay(req.params.id, req.body);
        res.redirect('/')
    } catch(err) {
        const ctx = {
            errors: parseError(err),
            play: {
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public)
            }
        }
        res.render('/play/edit',ctx)
    };
});

router.get('/like/:id', isUser(), async (req,res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if(play.author == req.user._id) {
            throw new Error('Cannot like you own play!')
        }
        await req.storage.likePlay(req.params.id,req.user._id);
        res.redirect('/play/details/' + req.params.id);
    } catch(err) {
        console.log(err.message);
        res.render('play/details/' + req.params.id)
    }
});  



module.exports = router;