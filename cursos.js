let cursos = [
  {
    id: 0,
    nombre: 'curso1',
    duracion: 3,
    valor: 12000
  },
  {
    id: 1,
    nombre: 'curso2',
    duracion: 4,
    valor: 10000
  },
  {
    id: 2,
    nombre: 'curso3',
    duracion: 2,
    valor: 8000
  }
];

let listarCursos = (cursos) =>{
  tiempo = 0
  cursos.forEach(curso =>{
    tiempo = tiempo + 2000;
    setTimeout(function(){
      console.log(curso);
    }, tiempo );
  });
};

module.exports = {
  cursos,
  listarCursos
};
