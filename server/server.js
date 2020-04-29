require('dotenv').config()

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    console.log(req.headers['x-forwarded-for'])
    var ipAddr = req.headers["x-forwarded-for"];
    if (ipAddr) {
        var list = ipAddr.split(",");
        ipAddr = list[list.length-1];
        axios.get(`http://api.ipstack.com/${ipAddr}?access_key=${process.env.APIKEY}`)
        .then((result) => {
            res.send(result.data)
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured')
        })
    } else {
        axios.get(`http://api.ipstack.com/check?access_key=${process.env.APIKEY}`)
            .then((result) => {
                res.send(result.data);
            })
            .catch((error) => {
                console.error(error);
                res.send('An error occured.');
            })
    }
});

module.exports = app;