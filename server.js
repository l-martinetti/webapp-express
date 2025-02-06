const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server dei film');
})


app.listen(port, (req, res) => {
    console.log(`Sono in ascolto alla porta ${port}`);
})