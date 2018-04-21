var express = require('express');
var app = express();

var AsignaturaService = require('../services/asignaturaService');

app.get('/', (req, res, next) => {

    let asignaturaServiceObj = new AsignaturaService(req, res)
    asignaturaServiceObj.getAsignatura();


    // Asignatura.find({}, (err, asignaturas) => {
    //     debugger;
    //     if (err) {
    //         return res.status(500).json({
    //             ok: false,
    //             mensaje: 'Error cargando asignaturas',
    //             errors: err
    //         })
    //     }

    //     res.status(200).json({
    //         ok: true,
    //         mensaje: 'Get asignaturas',
    //         asignaturas: asignaturas
    //     })

    // });

});

app.post('/', function(req, res) {
    let asignatura = req.body;
    let asignaturaServiceObj = new AsignaturaService(req, res)
    asignaturaServiceObj.addAsignatura(asignatura);
});

module.exports = app;