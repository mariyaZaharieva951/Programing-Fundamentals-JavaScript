const { isUser } = require('../middlewares/guards');
const { getAllBooks, createBook, getBookByID, wishBook } = require('../services/bookService');
//const { getUserById } = require('../services/userService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', isUser(), (req,res) => {
    res.render('create');
});

routes.post('/create', isUser(), async (req,res) => {
   try {
    const bookData = {
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        bookReview: req.body.bookReview,
        genre: req.body.genre,
        stars: req.body.stars,
        wishingList: [],
        owner: req.user._id
    }

    
    const book = await createBook(bookData);
    
    res.redirect('/book/catalog')

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
    const books = await getAllBooks();
    res.render('catalog', {
        title: 'Catalog page',
        books
    });
});


routes.get('/details/:id', async (req,res) => {
    try {
    const book = await getBookByID(req.params.id);
    //const user = await getUserById(ad.author);
        console.log(req.user);
        console.log(book)
    book.hasUser = Boolean(req.user);
    book.isCreator = req.user && req.user._id == book.owner;
    book.wishing = req.user && book.wishingList.find(u => u._id == req.user._id);
        console.log(book)
    //ad.email = user.email;
    

    res.render('details', {book})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }  
});

routes.get('/wish/:id', isUser(), async (req,res) => {
    try {
        const book = await getBookByID(req.params.id);
        if(book.owner == req.user._id) {
            throw new Error('Cannot wish your own book!')
        }

        await wishBook(req.params.id,req.user._id);
        res.redirect('/book/details/' + req.params.id);
    } catch(err) {
        console.log(err.message);
        res.render('book/details/' + req.params.id)
    }
}); 

// routes.get('/delete/:id', isUser(), async (req,res) => {
//     try {
//         const ad = await getAdByID(req.params.id);
        


        
//         if(ad.author != req.user._id) {
//             throw new Error('Cannot delete ad you haven\'t created!')
//         }
//         await deleteAd(req.params.id);
//         res.redirect('/');
//     } catch(err) {
//         console.log(err.message);
//         res.redirect('/ad/details/' + req.params.id)
//     }
// });


// routes.get('/edit/:id', isUser(), async (req,res) => {
//     try {
//         const ad = await getAdByID(req.params.id);
        
//         if(ad.author != req.user._id) {
//             throw new Error('Cannot edit ad you haven\'t created!')
//         }
        
//         res.render('edit', {ad})
//     } catch(err) {
//         console.log(err.message);
//         res.redirect('/ad/details/' + req.params.id)
//     }
// });

// routes.post('/edit/:id', isUser(), async (req,res) => {
//     try {
//         const ad = await getAdByID(req.params.id);
//         if(ad.author != req.user._id) {
//             throw new Error('Cannot edit ad you haven\'t created!')
//         }
//         await editAd(req.params.id, req.body);
//         res.redirect('/')
//     } catch(error) {
//         const errors = parseError(error);
//         console.error(error.message);
//         res.redirect('/ad/edit/' + req.params.id, {
//         title: 'Create page',
//         errors,
//         body: {
//             username: req.body.username
//         }
//     })
//     };
// });

module.exports = routes;