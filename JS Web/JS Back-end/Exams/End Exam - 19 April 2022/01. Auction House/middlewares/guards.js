
function isUser() {
    return (req,res,next) => {
    if(req.user) {
        next();
    } else {
        res.redirect('/photo/login');
    }
}
}

function isGuest() {
    return (req,res,next) => {
    if(req.user) {
        res.redirect('/');
    } else {
        next();
    }
}
}

module.exports = {
    isUser,
    isGuest
}