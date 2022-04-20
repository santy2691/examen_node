var express = require("express");
var path = require("path");
var router = express.Router();
var controllerAlumnos = require('../controllers/alumnos');
var controllerDocentes = require('../controllers/docentes');
var controllerAsignatura = require('../controllers/asignaturas');

router.get("/", async (req, res, next) => {
    res.render("index.pug");
});


router.get('/asignatura/new',[
    controllerAlumnos.listarAlumnos,
    controllerDocentes.listarDocentes
    ],
    (req,res) => {
        res.render('newAsignatura.pug',{
            profesores : req.docentes, 
            alumnos: req.alumnos
        });
    }
);


router.post('/asignatura/new', 
    controllerAsignatura.crearAsignatura,
    (req,res)=>{
        res.render("index.pug");
})

module.exports = router;