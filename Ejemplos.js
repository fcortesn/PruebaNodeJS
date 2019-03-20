function promedio(nota1, nota2, nota3){
  let resultado = (nota1 + nota2 + nota3)/3;
  console.log(resultado);
}

let promedio2 = (nota1, nota2, nota3, callback) =>{
  setTimeout(function(){
    let resultado = (nota1 + nota2 + nota3)/3;
    callback(resultado);
  }, 2000);
}

let promedio3 = (nota1, nota2, nota3) =>
  console.log((nota1 + nota2 + nota3)/3);


//promedio(2, 3, 4);

promedio2(2, 3, 4, function(resultado){
  console.log(resultado);
});
promedio(2, 3, 4);
promedio2(2, 3, 5, function(resultado){
  console.log(resultado);
});
setTimeout(function(){
  promedio(2, 3, 5);
}, 2000);
setTimeout(function(){
  promedio(2, 3, 6);
}, 2000);
