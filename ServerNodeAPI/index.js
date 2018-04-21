const express = require('express')
var restify = require('restify');
const AsignaturaService = require('./services/asignaturaService')
const url = 'mongodb://127.0.0.1:27017/EducacionDistanciaDB';
var Conexion = require('./helpers/conexion_mongodb');
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Rutas
var indexRoutes = require('./routes/index');
var asignaturaRoutes = require('./routes/asignatura');

//var conexion = new Conexion(url);

app.use('/', indexRoutes);
app.use('/asignaturas', asignaturaRoutes);



app.listen(3000, function() {
    console.log('Educación a Distancia Web app service listening on port 3000!');

});