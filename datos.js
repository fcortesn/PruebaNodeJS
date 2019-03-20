const {estudiante, obtenerPromedio} = require ('./calculos');
const opciones = {
  matematicas: {
    default: 0,
    alias: 'm'
  },
  ingles: {
    default: 0,
    alias: 'i'
  },
  programacion: {
    demand: true,
    alias: 'p'
  }
};

const argv = require('yargs')
            .command('promedio', 'Calcular el promedio', opciones)
            .argv;

module.exports = {
  obtenerPromedio,
  argv
};

let {nombre: n, edad, notas: {matematicas, ingles, programacion}} = estudiante;
