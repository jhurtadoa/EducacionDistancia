var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AsignaturaSchema = new Schema({
    nombre: { type: String, require: [true, "El nombre es requerido"], unique: true },
    resumen: {
        numero_temas: { type: Number, require: [true, "El número de temas es requerido"] },
        numero_actividades: { type: Number, require: [true, "El número de actividades es requerido"] },
        numero_estudiantes: { type: Number, require: [true, "El número de actividades es requerido"] }
    },
    temas: [{
        actividades: [{
            nombre: { type: String, require: [true, "El nombre es requerido"] },
            tiempo_dedicado: { type: Number }
        }],
        materiales: [{
            nombre: { type: String, require: [true, "El nombre es requerido"] },
            tipo: { type: String, require: [true, "El tipo es requerido"] },
            ruta: { type: String, require: [true, "La ruta es requerido"] }
        }]
    }]
});

module.exports = mongoose.model('Asignatura', AsignaturaSchema);