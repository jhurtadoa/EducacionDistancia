var mongoose = require('mongoose');
var MongoClient = mongoose.MongoClient;
const Asignatura = require("../models/Asignatura");
var Conexion = require('../helpers/conexion_mongodb');
const url = 'mongodb://127.0.0.1:27017/EducacionDistanciaDB';


class AsignaturaService {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    addAsignatura(asignatura) {
        let self = this;
        // let asignatura = new Asignatura({
        //     "nombre": "Mi asignatura",
        //     "resumen": {
        //         "numero_temas": 0,
        //         "numero_actividades": 0,
        //         "numero_estudiantes": 0
        //     },
        //     "temas": {
        //         "actividades": [{
        //             "nombre": "",
        //             "tiempo_dedicado": 0
        //         }],
        //         "materiales": [{
        //             "nombre": "",
        //             "tipo": "",
        //             "url": ""
        //         }]
        //     }
        // });

        debugger;
        try {
            //conexion mongoose
            let conexion = new Conexion(url);
            // asignatura.save(function(err, results) {
            conexion.collection('asignaturas').insert(asignatura, function(err, results) {
                debugger;
                if (err) {
                    switch (err.code) {
                        case 11000:
                            return self.res.status(400).json({
                                ok: false,
                                mensaje: 'Ya existe una asignatura con este nombre',
                                errors: err
                            });
                        default:
                            return self.res.status(500).json({
                                ok: false,
                                mensaje: 'Error guardando asignaturas',
                                errors: err
                            })
                    }
                }
                self.res.status(200).json({
                    ok: true,
                    mensaje: 'POST asignaturas guardadas con éxito!'
                })
            });
        } catch (error) {
            return self.res.status(500).json({
                status: 'error',
                error: error
            })
        }
    }
    getAsignatura() {
        let self = this;
        debugger;
        try {
            //conexion mongoose
            let conexion = new Conexion(url);
            Asignatura.find({}, (err, asignaturas) => {
                debugger;
                if (err) {
                    return self.res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando asignaturas',
                        errors: err
                    })
                }

                self.res.status(200).json({
                    ok: true,
                    mensaje: 'Get asignaturas',
                    asignaturas: asignaturas
                })

            });
        } catch (error) {
            return self.res.status(500).json({
                status: 'error',
                error: error
            })
        }
    }
}
module.exports = AsignaturaService;