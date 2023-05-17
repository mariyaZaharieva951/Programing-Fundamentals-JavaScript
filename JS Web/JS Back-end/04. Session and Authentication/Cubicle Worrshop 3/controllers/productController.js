const { Router } = require('express');

const router = Router();

router.get('/', async (req,res) => {
    const search = req.query
    const cubes = await req.storage.getAll(search); //ако има съвпадение ще покаже него, ако не ще покаже всички кубчета
   
    const ctx = {
        title: 'Cubicle',
        cubes
    }
    res.render('index', ctx);   //изпраща отговор като изобразява конкретно view
})

router.get('/create', (req,res) => {
    res.render('create', {title: 'Create cube'})
})


router.post('/create', async (req,res) => {
    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: req.body.difficulty
    }
    try {
        await req.storage.create(cube);  
    } catch(err) {
        if(err.name == 'ValidationError') {
            return res.render('create', {
                title: 'Create Cube',
                error: 'All field are required.'
            })
        }
    }
    
    //console.log(req.body) //Никога в базата данни не се записва бодито директно
    res.redirect('/');
});

router.get('/details/:id',  async (req,res) => {
    console.log(req.params.id)
    const cubeId = req.params.id;
    const cube = await req.storage.getById(cubeId)
    //const accessories = await req.storage.getAllAccessories();
  
  
    if(cube == undefined) {
        res.redirect('/404');
    } else {
       // console.log(cube)
        const ctx = {
            title: 'Cubicle',
            cube
        }
        res.render('details', ctx)
    }
});

router.get('/edit/:id', async (req,res) => {
    const cube = await req.storage.getById(req.params.id);
    //console.log(cube)
    if(!cube) {
        res.redirect('404');
    } else {
        const ctx = {
            title: 'Edit cube',
            cube
        }
        res.render('edit', ctx);
    } 
});

router.post('/edit/:id', async (req,res) => {
    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: req.body.difficulty
    }
    //console.log(cube)
    await req.storage.edit(req.params.id,cube);
    res.redirect('/');
});





module.exports = router;