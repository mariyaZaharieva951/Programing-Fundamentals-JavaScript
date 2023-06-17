const { isUser } = require('../middlewares/guards');
const { createProduct, getAllProducts, getProductByID, productShare, deleteProduct, editProduct } = require('../services/productService');
const { addShare, getUserById, getUser } = require('../services/userService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', isUser(), (req,res) => {
    res.render('create');
});

routes.post('/create', isUser(), async (req,res) => {
   try {
    const productData = {
        title: req.body.title,
        technique: req.body.technique,
        picture: req.body.picture,
        certificate: req.body.certificate,
        author: req.user._id,
        users: []
        
    }
    // const imageValidation = /https?:\/\//;
    //     if(!req.body.imageUrl.match(imageValidation)) {
    //         throw new Error('You have entered an invalid image address!');
    //     }
    const user = await getUser(req.user._id);
    const product = await createProduct (productData);
    // console.log(product);
    // console.log(user);
    await addShare(product._id, user._id)

    //user.myAds.push(photo._id)
    
    res.redirect('/product/catalog')

   } catch(error) {
    const errors = parseError(error);
    console.error(error.message);
    res.render('create', {
        title: 'Create page',
        errors,
        body: {
            username: req.body.username
        }
    })
   }
});

routes.get('/catalog', async(req,res) => {
    const products = await getAllProducts();
    

    res.render('catalog', {
        title: 'Catalog page',
        products
    });
});


routes.get('/details/:id', async (req,res) => {
    try {
    const product = await getProductByID(req.params.id);
        
        
    product.hasUser = Boolean(req.user);
    product.isAuthor = req.user && req.user._id == product.author._id;
    
    product.isUsers = req.user && product.users.find(u => u._id == req.user._id);
    
    res.render('details', {product})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }  
});

routes.get('/share/:id', isUser(), async (req,res) => {
    try {
        const product = await getProductByID(req.params.id);
        const user = req.user._id
        

        if(product.author._id == req.user._id) {
            throw new Error('Cannot share your own art!')
        }
        
        
        await productShare(req.params.id,user);
        res.redirect('/');
    } catch(err) {
        const errors = parseError(err);
        console.log(err.message);
        res.render('details', {
            title: 'Details page',
            errors,
            body: {
                username: req.body.username
            } 
        })
    }
}); 

routes.get('/delete/:id', isUser(), async (req,res) => {
    try {
        const product = await getProductByID(req.params.id);
        
        if(product.author._id != req.user._id) {
            throw new Error('Cannot delete product you haven\'t created!')
        }
        await deleteProduct(req.params.id);
        res.redirect('/product/catalog');
    } catch(err) {
        console.log(err.message);
        res.render('details', {
            error: 'Can\`t delete auction!'
        })
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const product = await getProductByID(req.params.id);
        
        if(product.author._id != req.user._id) {
            throw new Error('Cannot edit product you haven\'t created!')
        }
        res.render('edit', {product})
    } catch(err) {
        console.log(err.message);
        res.redirect('/product/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const product = await getProductByID(req.params.id);
        if(product.author._id != req.user._id) {
            throw new Error('Cannot edit auction you haven\'t created!')
        }
        await editProduct(req.params.id, req.body);
        res.redirect('/product/details/' + req.params.id)
    } catch(error) {
       // console.log(req.params.id)
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/product/edit/' + req.params.id, {
        title: 'Edit page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});



module.exports = routes;