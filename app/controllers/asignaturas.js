const Asignatura = require('../models/asignatura');



const listarAsignaturas = async (req,res,next)=> {
    let asignaturas = await Asignatura.find();
    req.asignaturas = asignaturas;
    next()
}


const crearAsignatura = async (req,res,next) => {
    let {nombre,num_horas ,docenteId, alumnos} = req.body;
    let asignatura = new Asignatura({
        nombre: nombre,
        num_horas : num_horas,
        docente : docenteId,
        alumnos : alumnos
    });
    console.log(asignatura);
    asignatura.save();
    next();
}

const editarAsignatura = async (req,res,next) => {
    let idAsignatura = req.idAsignatura;
    let asignatura = Asignatura.findByIdAndUpdate(idAsignatura,{
        nombre : req.body.nombre,
        num_horas : req.body.num_horas,
        docente : req.body.docenteId,
        alumnos : req.body.alumnos
    });
    next();
}



const eliminarAsignatura = async (req,res,next) => {
    Asignatura.findByIdAndRemove(req.idAsignatura);
} 


module.exports = {
    listarAsignaturas,
    crearAsignatura,
    editarAsignatura,
    eliminarAsignatura

}