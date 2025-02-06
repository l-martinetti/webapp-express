const setBasePath = (req, res, next) => {
    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies_cover/`
    next()
}

module.exports = setBasePath;