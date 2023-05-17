module.exports = {
    async attach(req,res) {
        //console.log(req.params)
        const cube = await req.storage.getById(req.params.id);
        const accessories = await req.storage.getAllAccessories(cube.accessories.map(a => a._id))
        
        res.render('attachAccessory', {
            title: 'Attach',
            cube,
            accessories
        })
    },
    async attachPost(req,res) {
        //console.log(req.body);
        const cubeId = req.params.cubeId;
        const stickerId = req.body.accessory;

        await req.storage.attachStickers(cubeId,stickerId);

        res.redirect(`/details/${cubeId}`)
    }
}