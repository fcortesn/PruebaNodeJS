const {estudiante, obtenerPromedio} = require ('./calculos');

console.log(estudiante);
console.log(obtenerPromedio(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));

let {nombre: n, edad, notas: {matematicas, ingles, programacion}} = estudiante;
console.log(n);
