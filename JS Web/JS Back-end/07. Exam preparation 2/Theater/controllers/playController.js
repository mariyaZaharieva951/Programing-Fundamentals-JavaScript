const { isUser } = require('../middlewares/guards');
const { parseError } = require('../utils/parsers');

const router = require('express').Router();


router.get('/create', isUser(), (req,res) => {
    res.render('theater/create')
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
})



module.exports = router;