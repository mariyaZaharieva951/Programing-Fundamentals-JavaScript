module.exports = {
    catalog: (req,res) => {
        res.render('index', {title: 'Catalog Page'});   //изпраща отговор като изобразява конкретно view
    }
}