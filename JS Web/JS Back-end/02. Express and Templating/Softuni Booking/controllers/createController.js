const { create } = require('../services/accomodationService');

const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('create', {
        title: 'Create Page'
    })
})

router.post('/', async (req,res) => {
    //console.log(req.body);
    try {
        const result = await create(req.body)
        res.redirect('/catalog/' + result.id)
    } catch(err) {
        res.render('create', {
            title: 'Request Error'
        });

    }
    
})

module.exports = router;