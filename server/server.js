const express = require('express');
const axios = require('axios');

const app = express();


app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    axios.get(`https://api.kanye.rest`)
        .then((result) => {
            res.send(result.data);
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;
