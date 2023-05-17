module.exports = {
    createAccessory(req,res) {
        res.render('createAccessory', {
            title: 'Create accossory'
        });
    },
    async postAccessory(req,res) {
        //console.log(req.body);
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }
        await req.storage.createAccessory(accessory)
        
        res.redirect('/')
    }
    
}