const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homePages/home')
})


module.exports = router;