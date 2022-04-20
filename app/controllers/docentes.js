const Docentes = require('../models/docente');
const Alumno = require('../models/alumnos');


const listarDocentes = async (req,res,next)=> {
    let docentes = await Docentes.find();
    req.docentes = docentes;
    next()
}







module.exports = {
    listarDocentes
}