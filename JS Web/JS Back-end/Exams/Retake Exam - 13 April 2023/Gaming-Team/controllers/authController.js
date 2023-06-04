const { register } = require('../services/authService');
const { parserError } = require('../utils/parser');

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
        res.cookie('token', token)
        res.redirect('/');
    } catch(err) {
        const errors = parserError(err);
        console.error(err.message);
        res.render('register', {
            errors,
            body: {
                username: req.body.username
            }
        })
    }
    




    
})

module.exports = routes;