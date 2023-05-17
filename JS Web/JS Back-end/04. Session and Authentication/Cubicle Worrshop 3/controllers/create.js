module.exports = {
    create: (req,res) => {
        res.render('create', {title: 'Create cube'})
    },
    post: async (req,res) => {
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
    }
}