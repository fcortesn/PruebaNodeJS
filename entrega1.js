const opciones = {
  id: {
    demand: true,
    alias: 'i'
  },
  nombre: {
    demand: true,
    alias: 'n'
  },
  cedula: {
    demand: true,
    alias: 'c'
  }
};

const express = require('express')
const app = express()
const {cursos, listarCursos} = require ('./cursos');
const argv = require('yargs')
            .command('inscribir', 'Inscribir en curso', opciones)
            .argv;

let crearArchivo = (nombreEstudiante, cedula, curso) =>{
  texto = "El estudiante " + nombreEstudiante + " con cédula " + cedula + '\n' +
          "se ha matriculado con éxito en el curso " + curso.nombre + '\n' +
          "con duración de " + curso.duracion + " horas y un valor de " + curso.valor;
  app.get('/', function (req, res) {
    res.send(texto)
  });
  app.listen(3000)
}

if (argv._[0] == 'inscribir') {
  let cursoEncontrado = cursos.find(curso => curso.id == argv.i);
  console.log(argv.i);
  if (cursoEncontrado) {
    crearArchivo(argv.n, argv.c, cursoEncontrado);
  } else {
    console.log('No existe un curso con el id: ' + argv.i);
  }
} else {
  listarCursos(cursos);
}
