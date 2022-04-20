var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schemaAsignatura = new Schema({
    nombre : {type: String},
    numero_horas : {type: String},
    docente : {
        ref: "docentes",
        type : Schema.Types.ObjectId
    },
    alumnos: [
        {
            ref: "alumnos",
            type: Schema.Types.ObjectId
        }
    ]
});


module.exports = mongoose.model('asignatura',schemaAsignatura);