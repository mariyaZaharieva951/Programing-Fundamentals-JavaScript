module.exports = {
    details: async (req,res) => {
        console.log(req.params.id)
        const cubeId = req.params.id;
        const cube = await req.storage.getById(cubeId)
        //const accessories = await req.storage.getAllAccessories();
      
      
        if(cube == undefined) {
            res.redirect('/404');
        } else {
            console.log(cube)
            const ctx = {
                title: 'Cubicle',
                cube
            }
            res.render('details', ctx)
        }
    }
}