const { isUser } = require('../middlewares/guards');
const { getAllPhotos, createPhoto, getPhotoByID, commentPhoto, getPhoto, deletePhoto, editPhoto } = require('../services/photoService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', isUser(), (req,res) => {
    res.render('create');
});

routes.post('/create', isUser(), async (req,res) => {
   try {
    const photoData = {
        name: req.body.name,
        image: req.body.image,
        age: req.body.age,
        description: req.body.description,
        location: req.body.location,
        commentList: [],
        owner: req.user._id
    }

    const imageValidation = /https?:\/\//;
        if(!req.body.image.match(imageValidation)) {
            throw new Error('You have entered an invalid image address!');
        }
    
    const photo = await createPhoto(photoData);
    

    //user.myAds.push(photo._id)
    
    res.redirect('/photo/catalog')

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
    const photos = await getAllPhotos();
    

    res.render('catalog', {
        title: 'Catalog page',
        photos
    });
});


routes.get('/details/:id', async (req,res) => {
    try {
    const photo = await getPhoto(req.params.id);
   
        
    photo.hasUser = Boolean(req.user);
    photo.isAuthor = req.user && req.user._id == photo.owner._id;

    //photo.comments = req.user && photo.users.find(u => (u._id).toString() == req.user._id);
    
    
    res.render('details', {photo})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }  
});

routes.post('/comment/:id', isUser(), async (req,res) => {
    try {
        const photo = await getPhotoByID(req.params.id);
        const user = req.user._id
        const {comment} = req.body
        
        if(photo.owner._id == req.user._id) {
            throw new Error('Cannot comment your own photo!')
        }

        await commentPhoto(req.params.id,{user, comment});
        res.redirect('/photo/details/' + req.params.id);
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
        const photo = await getPhotoByID(req.params.id);
        
        if(photo.owner._id != req.user._id) {
            throw new Error('Cannot delete photo you haven\'t created!')
        }
        await deletePhoto(req.params.id);
        res.redirect('/photo/catalog');
    } catch(err) {
        console.log(err.message);
        res.render('details', {
            error: 'Can\`t delete photo!'
        })
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const photo = await getPhotoByID(req.params.id);
        
        if(photo.owner._id != req.user._id) {
            throw new Error('Cannot edit photo you haven\'t created!')
        }
        
        res.render('edit', {photo})
    } catch(err) {
        console.log(err.message);
        res.redirect('/photo/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const photo = await getPhotoByID(req.params.id);
        if(photo.owner._id != req.user._id) {
            throw new Error('Cannot edit ad you haven\'t created!')
        }
        await editPhoto(req.params.id, req.body);
        res.redirect('/photo/details/' + req.params.id)
    } catch(error) {
       // console.log(req.params.id)
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/photo/edit/' + req.params.id, {
        title: 'Edit page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});

module.exports = routes;