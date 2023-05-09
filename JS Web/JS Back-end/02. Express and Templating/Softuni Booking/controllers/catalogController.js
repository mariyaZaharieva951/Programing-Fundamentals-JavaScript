const router = require('express').Router();


router.get('/', (req,res) => {
        res.render('catalog', {
            title: 'Catalog Page'
        })
    });

router.get('/:id', (req,res) => {
    res.render('details', {
        title: 'Details page'
    })
});

module.exports = router;