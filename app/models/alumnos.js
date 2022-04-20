var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schemaAlumno = new Schema({
    nombre : {type: String},
    apellido : {type: String}
});


module.exports = mongoose.model('alumno',schemaAlumno);