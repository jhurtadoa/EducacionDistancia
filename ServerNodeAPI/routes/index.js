var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Bienvendo a Educación a Distancia API.<br/><br/><br/><br/><br/><hr/><h2>Asignaturas</h2>Listar: url= /asignaturas, method= GET<br/><br/>Crear: url= /asignaturas, method=POST, body=Json');
});

module.exports = app;