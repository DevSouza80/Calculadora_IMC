
var peso;
var IMC;
var altura;
var resultado
function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);


  resultado = document.getElementById("container");

  if(imc < 17) {
    resultado.innerHTML = "<br> Seu resultado foi:" + imc + "<br> Cuidado você está muito abaixo do peso!"

  } else if(imc > 17 && imc <= 18.49) {
      resultado.innerHTML = "<br> Seu resultado foi:" + imc + "<br> Você está abaixo do peso!"
  } else if(imc >= 18.5 && imc < 24.99 ) {
     resultado.innerHTML = "<br> Seu resultado foi:" + imc + "<br> Você está no peso ideal!"
  } else if(imc > 25 && imc <= 29.99) {
      resultado.innerHTML = "<br> Seu resultado foi:" + imc + "<br> Você está acima do peso!"
  }  else if(imc >= 30) {
    resultado.innerHTML = "<br> Seu resultado foi:" + imc + "<br> cuidado obesidade!"
  }

  peso = document.getElementById("peso").value = '';
  altura = document.getElementById("altura").value = '';

}