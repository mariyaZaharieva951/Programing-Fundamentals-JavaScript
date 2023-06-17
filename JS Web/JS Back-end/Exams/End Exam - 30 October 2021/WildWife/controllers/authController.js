
const { isGuest, isUser } = require('../middlewares/guards');
const { getProductByID, getAllProducts } = require('../services/productService');
const { register,login, getUserById, getUser} = require('../services/userService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/register', isGuest(), (req,res) => {
    res.render('register', {
        title: 'Register page'
    })
});

routes.post('/register', isGuest(), async (req,res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        if( firstName == '' || lastName == '' || email == '' || password == '') {
            throw new Error('All fields are required!');
        }
        
        if( password !== req.body.rePass) {
            throw new Error('Password don\'t match!' );
        }

        // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if(!email.match(mailformat)) {
        //     throw new Error('You have entered an invalid email address!');
        // }

        const token = await register(firstName, lastName, email, password);    
       
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

routes.get('/profile', isUser(), async (req,res) => {
    try {
        const user = await getUser(req.user._id);
        
        const pubs = user.myPublications.length > 0 ? true: false;
        const allPubs = user.myPublications.map(p => p.title).join(', ');
        
        const products = await getAllProducts();
        
        // if(product.author._id != req.user._id) {
        //     throw new Error('Cannot edit auction you haven\'t created!')
        // }
        //await editProduct(req.params.id, req.body);
        res.render('profile', {
            user, pubs, allPubs
        })
    } catch(error) {
       // console.log(req.params.id)
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/auth/profile', {
        title: 'Profil page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});




module.exports = routes;