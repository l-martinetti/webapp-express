

const index = (req, res) => {
    res.send('Lista movies')
}

const show = (req, res) => {
    const id = req.params.id

    res.send(`mostra movie con id ${id}`)
}

module.exports = {
    index,
    show
}