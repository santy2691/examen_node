const Alumno = require('../models/alumnos');


const listarAlumnos = async (req,res,next)=> {
    let alumnos = await Alumno.find();
    req.alumnos = alumnos;
    next()
}







module.exports = {
    listarAlumnos
}