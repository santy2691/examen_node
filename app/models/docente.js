var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schemaDocente = new Schema({
    nombre : {type: String},
    apellido : {type: String}
});


module.exports = mongoose.model('docente',schemaDocente);