const { Router } = require('express');

const router = Router();


router.get('/register', (req,res) => {
    res.render('register', {
        title: 'Register Page'
    })
});

router.post('/register', async (req,res) => {
    try {
        
        await req.auth.register(req.body);
        
        res.redirect('/products');
    } catch(err) {
        const ctx = {
            title: 'Register', 
            error: err.message, 
            data: {username: req.body.username}
        }
        res.render('register', ctx)
    }   
})

router.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login Page'
    })
});

router.post('/login', (req,res) => {
    console.log(req.body);

    res.redirect('/products');
})




module.exports = router;