const {obtenerPromedio, argv} = require('./datos.js');
const express = require('express')
const app = express()

console.log(argv);
if (argv._[0] == 'promedio') {
  texto = ('el promdio de ' + argv.n + ' es ' + obtenerPromedio(argv.m, argv.i, argv.p));
} else {
  console.log('promedio no calculado');
}

app.get('/', function (req, res) {
  res.send(texto)
})

app.listen(3000)
