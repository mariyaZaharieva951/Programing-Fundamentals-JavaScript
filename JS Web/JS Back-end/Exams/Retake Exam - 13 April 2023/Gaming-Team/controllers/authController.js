const { register, login } = require('../services/authService');
const { parseError } = require('../utils/parser');

const routes = require('express').Router();



routes.get('/register', (req,res) => {
    res.render('register');
});

routes.post('/register', async (req,res) => {
    try { 
        const {username,email,password} = req.body;
        if(username == '' || email == '' || password == '') {
            throw new Error('All fields are required');
        }
        if(password !== req.body.rePassword) {
            throw new Error('Passwords don\`n match')
        }
        const token = await register(username,email,password);
        res.cookie('token', token);
        
        res.redirect('/');
    } catch(error) {
        const errors = parseError(error);
        console.error(error.message);
        res.render('register', {
            title: 'Register page',
            errors,
            body: {
                username: req.body.username
            }
        })
    }
});

routes.get('/login', (req,res) => {
    res.render('login');
});

routes.post('/login', async (req,res) => {
   try {
    const {email,password} = req.body;
    if(email == '' || password == '') {
        throw new Error('All fields are required');
    }
    const token = await login(email,password);
    res.cookie('token', token);

    res.redirect('/');
   } catch(error) {
    const errors = parseError(error)
    console.error(error.message)
    res.render('login', {
        title: 'Login page',
        errors,
        body: {
            username: req.body.username
        }
    });
   }
});

routes.get('/logout', (req,res) => {
    res.clearCookie('token');
    res.redirect('/');
})

module.exports = routes;