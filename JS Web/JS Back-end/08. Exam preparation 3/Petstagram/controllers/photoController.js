const { isUser } = require('../middlewares/guards');
const { getAllPhotos, createPhoto, getPhotoByID, commentPhoto } = require('../services/photoService');
const { getUserById } = require('../services/userService');
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
    const photo = await getPhotoByID(req.params.id);
    //const user = await getUserById(photo.owner);
        
    photo.hasUser = Boolean(req.user);
    photo.isAuthor = req.user && req.user._id == photo.owner._id;

    //photo.comments = req.user && photo.users.find(u => (u._id).toString() == req.user._id);
    
    //photo.email = user.email;
    

    res.render('details', {photo})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }  
});

routes.post('/comment/:id', isUser(), async (req,res) => {
    try {
        //const photo = await getPhotoByID(req.params.id);
        const user = req.user._id
        const {comment} = req.body
    
        // if(photo.owner._id == req.user._id) {
        //     throw new Error('Cannot comment your own photo!')
        // }

        await commentPhoto(req.params.id,{user, comment});
        res.redirect('/photo/details/' + req.params.id);
    } catch(err) {
        console.log(err.message);
        res.render('/photo/details/' + req.params.id)
    }
}); 

routes.get('/delete/:id', isUser(), async (req,res) => {
    try {
        const ad = await getAdByID(req.params.id);
        


        
        if(ad.author != req.user._id) {
            throw new Error('Cannot delete ad you haven\'t created!')
        }
        await deleteAd(req.params.id);
        res.redirect('/');
    } catch(err) {
        console.log(err.message);
        res.redirect('/ad/details/' + req.params.id)
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const ad = await getAdByID(req.params.id);
        
        if(ad.author != req.user._id) {
            throw new Error('Cannot edit ad you haven\'t created!')
        }
        
        res.render('edit', {ad})
    } catch(err) {
        console.log(err.message);
        res.redirect('/ad/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const ad = await getAdByID(req.params.id);
        if(ad.author != req.user._id) {
            throw new Error('Cannot edit ad you haven\'t created!')
        }
        await editAd(req.params.id, req.body);
        res.redirect('/')
    } catch(error) {
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/ad/edit/' + req.params.id, {
        title: 'Create page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});

module.exports = routes;