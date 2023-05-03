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
        await req.storage.create(cube);
        //console.log(req.body) //Никога в базата данни не се записва бодито директно
        res.redirect('/');
    }
}