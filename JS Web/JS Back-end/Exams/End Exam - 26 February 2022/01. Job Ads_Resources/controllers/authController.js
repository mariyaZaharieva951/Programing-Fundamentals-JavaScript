
const { register,login} = require('../services/userService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/register', (req,res) => {
    res.render('register', {
        title: 'Register page'
    })
});

routes.post('/register', async (req,res) => {
    try {
        const {email, password,description} = req.body;
        if(email == '' || password == '' || description == '') {
            throw new Error('All fields are required!');
        }
        if( password !== req.body.rePass) {
            throw new Error('Password don\'t match!' );
        }
       
        const token = await register(email,password,description);    
       
        res.cookie('token', token);
        
        res.redirect('/')
    } catch(err) {
        console.log(err.errors)
        const errors = parseError(err);
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username:req.body.username
            }
        })
    }
});

routes.get('/login', (req,res) => {
    res.render('login', {
        title: 'Register page'
    })
});

routes.post('/login', async (req,res) => {
    try {
        const {email, password} = req.body;

        const token = await login(email,password);    
        res.cookie('token', token);
        res.redirect('/');
    } catch(err) {
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
})

module.exports = routes;