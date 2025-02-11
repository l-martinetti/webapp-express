const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound')
const movieRouter = require('./routers/movie');
const imagePath = require('./middlewares/imagePath')

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.static('public'))
app.use(express.json())
app.use(imagePath)


app.get('/', (req, res) => {
    res.send('Server dei film');
})

app.use('/api/movies', movieRouter)

app.use(errorsHandler);
app.use(notFound);

app.listen(port, (req, res) => {
    console.log(`Sono in ascolto alla porta ${port}`);
})