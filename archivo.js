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
            .argv

console.log(argv.p);
console.log(argv);
console.log((argv.m + argv.i + argv.p) / 3);
