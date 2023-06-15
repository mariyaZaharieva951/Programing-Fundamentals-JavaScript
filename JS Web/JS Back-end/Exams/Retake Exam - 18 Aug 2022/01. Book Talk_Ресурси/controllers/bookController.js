const { isUser } = require('../middlewares/guards');
const { getAllBooks, createBook, getBookByID, wishBook, deleteBook, editBook } = require('../services/bookService');
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
    const imageValidation = /https?:\/\//;
        if(!req.body.image.match(imageValidation)) {
            throw new Error('You have entered an invalid image address!');
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
    const myWishes = 
    res.render('catalog', {
        title: 'Catalog page',
        books
    });
});

// routes.get('/profile', async(req,res) => {
//     const books = await getAllBooks();
//     const myWish = books.populate('wishinList')

//     //book.wishingList.find(u => u._id == req.user._id);
//     console.log(books);
//     console.log(myWish)
//     res.render('catalog', {
//         title: 'Catalog page',
//         books
//     });
// });


routes.get('/details/:id', async (req,res) => {
    try {
    const book = await getBookByID(req.params.id);
    //const user = await getUserById(ad.author);
    
    book.hasUser = Boolean(req.user);
    book.isCreator = req.user && req.user._id == book.owner;
    book.wishing = req.user && book.wishingList.find(u => u._id == req.user._id);
       
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

routes.get('/delete/:id', isUser(), async (req,res) => {
    try {
        const book = await getBookByID(req.params.id);
        
        if(book.owner != req.user._id) {
            throw new Error('Cannot delete book you haven\'t created!')
        }
        await deleteBook(req.params.id);
        res.redirect('/book/catalog');
    } catch(err) {
        console.log(err.message);
        res.redirect('/book/details/' + req.params.id)
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const book = await getBookByID(req.params.id);
        
        if(book.owner != req.user._id) {
            throw new Error('Cannot edit book you haven\'t created!')
        }
        
        res.render('edit', {book})
    } catch(err) {
        console.log(err.message);
        res.redirect('/book/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const book = await getBookByID(req.params.id);
        if(book.owner != req.user._id) {
            throw new Error('Cannot edit book you haven\'t created!')
        }
        await editBook(req.params.id, req.body);
        res.redirect('/book/details/' + req.params.id)
    } catch(error) {
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/book/edit/' + req.params.id, {
        title: 'Edit page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});

module.exports = routes;