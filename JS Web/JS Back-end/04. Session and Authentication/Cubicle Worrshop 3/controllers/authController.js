const { Router } = require('express');

const router = Router();


router.get('/register', (req,res) => {
    res.render('register', {
        title: 'Register Page'
    })
});

router.post('/register', (req,res) => {
    console.log(req.body);
    
    res.redirect('/auth/register');
})

router.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login Page'
    })
});

router.post('/login', (req,res) => {
    console.log(req.body);

    res.redirect('/auth/login');
})




module.exports = router;