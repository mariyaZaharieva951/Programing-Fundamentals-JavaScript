module.exports = {
    create: (req,res) => {
        res.render('create', {title: 'Create cube'})
    },
    post: (req,res) => {
        res.redirect('/');
    }
}