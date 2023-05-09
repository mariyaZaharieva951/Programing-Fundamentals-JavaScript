module.exports = (defaultTitle) => (req,res,next) => {
    res.locals.title = defaultTitle; // четем заглавието от дефолтния контекст
    next();
}