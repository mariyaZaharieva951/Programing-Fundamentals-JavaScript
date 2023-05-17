const { Router } = require('express');

const router = Router();

router.get('/', (req,res) => { 
    res.redirect('/products')
})

router.get('/about', (req,res) => {
    res.render('about', {title: 'About page'})
})

router.all('/*', (req,res) => {
    res.render('404', {title: 'Not Found page'});
})

module.exports = router;