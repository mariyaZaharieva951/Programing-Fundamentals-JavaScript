module.exports = {
    async edit(req,res) {
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
        
    },
    async post(req,res) {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: req.body.difficulty
        }
        //console.log(cube)
        await req.storage.edit(req.params.id,cube);
        res.redirect('/');
    }
}