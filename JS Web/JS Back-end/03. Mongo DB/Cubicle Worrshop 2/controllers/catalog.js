module.exports = {
    catalog: async (req,res) => {
        //console.log(req.storage)
        const search = req.query
        const cubes = await req.storage.getAll(search); //ако има съвпадение ще покаже него, ако не ще покаже всички кубчета
        //console.log(cubes)
       
        const ctx = {
            title: 'Cubicle',
            cubes
        }
        res.render('index', ctx);   //изпраща отговор като изобразява конкретно view
    }
}