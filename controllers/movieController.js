const connection = require('../data/db')

const index = (req, res) => {
    const sql = `SELECT *
    FROM movies`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al database fallita' })

        const movie = results.map(movie => {
            return ({
                ...movie,
                image: req.imagePath + movie.image
            })
        })
        res.json(movie)
    })
}

const show = (req, res) => {
    const id = req.params.id
    const sql = `SELECT M.*, R.id reviews_id,R.vote, R.text
    FROM movies M
    LEFT JOIN reviews R ON M.id = R.movie_id
    WHERE M.id = ?`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err })
        if (results.length === 0 || results[0].id === null) {
            return res.status(404).json({ error: 'film non trovato' })
        }

        let { text, vote, reviews_id, ...movieData } = results[0];

        let movie = {
            ...movieData,
            image: req.imagePath + results[0].image,
            reviews: results[0].reviews_id ? results.map(item => ({
                id: item.reviews_id,
                vote: item.vote,
                text: item.text
            })) : []
        }

        res.json(movie)
    })
}

module.exports = {
    index,
    show
}