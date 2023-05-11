module.exports = {
    catalog: async (req,res) => {
        //console.log(req.storage)
        const cubes = await req.storage.getAll();
        console.log(cubes)
        const ctx = {
            title: 'Cubicle',
            cubes
        }
        res.render('index', ctx);   //изпраща отговор като изобразява конкретно view
    }
}