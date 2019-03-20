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

const fs = require('fs');
let crearArchivo = (nombreEstudiante, cedula, curso) =>{
  texto = "El estudiante " + nombreEstudiante + " con cédula " + cedula + '\n' +
          "se ha matriculado con éxito en el curso " + curso.nombre + '\n' +
          "con duración de " + curso.duracion + " horas y un valor de " + curso.valor;
  fs.writeFile('inscripcion.txt', texto, (err) =>{
    if (err) throw (err);
    console.log('se ha creado el archivo con éxito.');
  });
}

const {cursos, listarCursos} = require ('./cursos');

const argv = require('yargs')
            .command('inscribir', 'Inscribir en curso', opciones)
            .argv;

if (argv.nombre) {
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
