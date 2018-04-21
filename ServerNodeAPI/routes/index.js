var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Bienvendo a Educación a Distancia API.')
});

module.exports = app;