const connection = require('../data/db')

const index = (req, res) => {
    const sql = `SELECT *
    FROM movies`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al database fallita' })
        res.json(results)
    })
}

const show = (req, res) => {
    const id = req.params.id
    const sql = `SELECT *
    FROM movies M
    WHERE M.id = ?`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err })
        if (results.length === 0 || results[0].id === null) {
            return res.status(404).json({ error: 'film non trovato' })
        }

        const movie = results[0]
        res.json(movie)
    })
}

module.exports = {
    index,
    show
}