module.exports = {
    details: async (req,res) => {
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
    },
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