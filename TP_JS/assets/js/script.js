
function calcular() {
  let n1 = document.getElementById('nro1').value;
  let n2 = document.getElementById('nro2').value;

  console.log(typeof(n1));
  console.log(n2);

  let resultado = parseInt(n1) + parseInt(n2);

  console.log(resultado);

  let x = document.getElementById('resultado');
  x.innerHTML = resultado;
  x.style.color = 'yellow';

}


function calculartotal() {
  let cant = document.getElementById('cantidad').value;
  let categ = document.getElementById('categoria').value;
  
  console.log(categ);
  descuento = 1;

  if (categ == "Estudiante") {
    descuento = 0.2;
  } else if (categ == "Trainee") {
    descuento = 0.5;
  } else if (categ == "Junior") {
    descuento = 0.85;
  } else {
    descuento = 1;
  }

  let totapagar = parseInt(cant) * parseFloat(descuento) * 200;
  
  let x = document.getElementById('labeltotal');

  x.innerHTML = 'Total a Pagaar $:' + totapagar;
 /* x.style.color = 'yellow';*/
}
 
function limpiar() {
  let x = document.getElementById('labeltotal');

  x.innerHTML = 'Total a Pagar $:';
}

