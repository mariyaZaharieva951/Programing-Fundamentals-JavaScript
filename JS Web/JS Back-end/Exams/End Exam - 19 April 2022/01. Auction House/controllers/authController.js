
const { isGuest } = require('../middlewares/guards');
const { register,login} = require('../services/userService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/register', isGuest(), (req,res) => {
    res.render('register', {
        title: 'Register page'
    })
});

routes.post('/register', isGuest(), async (req,res) => {
    try {
        const {username,email, password} = req.body;
        if( username == '' || email == '' || password == '') {
            throw new Error('All fields are required!');
        }
        
        if( password !== req.body.rePass) {
            throw new Error('Password don\'t match!' );
        }

        // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if(!email.match(mailformat)) {
        //     throw new Error('You have entered an invalid email address!');
        // }

        const token = await register(username,email,password);    
       
        res.cookie('token', token);
        
        res.redirect('/')
    } catch(err) {
        const errors = parseError(err);
        console.error(err.message)
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username:req.body.username
            }
        })
    }
});

routes.get('/login', isGuest(), (req,res) => {
    res.render('login', {
        title: 'Login page'
    })
});

routes.post('/login', isGuest(), async (req,res) => {
    try {
        const {username, password} = req.body;

        const token = await login(username,password);    
        res.cookie('token', token);
        res.redirect('/');
    } catch(err) {
        console.log('error')
        const errors = parseError(err);
        console.error(err.message);
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username
            }
        })
    }
});

routes.get('/logout', (req,res) => {
    res.clearCookie('token');
    res.redirect('/');
});





module.exports = routes;