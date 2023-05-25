const validator = require('validator');
const { Router } = require('express');
const { isGuest, isAuth } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator')

const router = Router();


router.get('/register', isGuest(), (req,res) => {
    res.render('register', {
        title: 'Register Page'
    })
});

router.post('/register', isGuest(), 
body('username', 'Username must be ar least 5 characters long and may contain only alphanumeric characters').trim().isLength({min: 1}).isAlphanumeric(),
body('password', 'Username must be ar least 8 characters long and may contain only alphanumeric characters').trim().isLength({min: 1}).isAlphanumeric(),
body('repeatPassword').trim().custom((value, {req}) => {
    if(value != req.body.password) {
        throw new Error('Password don\`t match!')
    }
    return true;
}),
async (req,res) => {
   
    try {
        // const validEmail = validator.isEmail(req.body.email)
        // if(!validEmail) {
        //     throw new Error('Please enter a valid email!')
        // }
        const errors = Object.values(validationResult(req).mapped());
        if(errors.length > 0) {
            throw new Error(errors.map(e => e.msg).join('\n'));
        }

        await req.auth.register(req.body);
        
        res.redirect('/products');
    } catch(err) {
        console.log(err)
        const ctx = {
            title: 'Register', 
            errors: err.message.split('\n'), 
            data: {username: req.body.username, email: req.body.email}
        }
        res.render('register', ctx)
    }   
})

router.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login Page'
    })
});

router.post('/login', isGuest(),async (req,res) => {
    
    try {
        //console.log(req.body);
        await req.auth.login(req.body);

        res.redirect('/products');
    } catch(err) {
        const ctx = {
            title: 'Login',
            error: err.message, 
            data: {username: req.body.username}
        }
        //console.log(ctx)
        res.render('login', ctx)
    }
    
})

router.get('/logout', isAuth(),(req,res) => {
    req.auth.logout();
    res.redirect('/products')
})



module.exports = router;