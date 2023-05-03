module.exports = {
    catalog: (req,res) => {
        //console.log(req.storage)
        res.render('index', {title: 'Catalog Page'});   //изпраща отговор като изобразява конкретно view
    }
}