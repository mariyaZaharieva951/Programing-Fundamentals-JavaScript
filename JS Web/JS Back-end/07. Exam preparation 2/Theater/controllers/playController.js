const router = require('express').Router();


router.get('/create', (req,res) => {
    res.render('theater/create')
});

router.post('/create', (req,res) => {
    console.log(req.body);
    try {
        
    } catch(err) {
        const ctx = {
            errors: [err.message]
        }
        res.render('theater/create',ctx)
    }
    
    
    //res.redirect('/play/create');
})



module.exports = router;