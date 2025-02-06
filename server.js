const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound')

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server dei film');
})

app.use(errorsHandler);
app.use(notFound);

app.listen(port, (req, res) => {
    console.log(`Sono in ascolto alla porta ${port}`);
})