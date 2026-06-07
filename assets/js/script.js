
var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
 event.preventDefault();

 peso = document.getElementById("peso").value;
 altura = document.getElementById("altura").value;

  resultado = document.getElementById("resultado");

  imc = peso / (altura * altura);

  if(imc < 17 ) {
    resultado.innerHTML = `
       <p style="color: #E85E00;  margin-bottom:0.4rem; font-size:1rem; font-family="sans-serif";" "> Seu resultado é:</p> <span> style="color: #E85E00; margin-bottom:0.8rem; font-family="sans-serif";"  ${imc.toFixed(2)}</span>
     <p style="color: #E85E00;"font-size:0.8rem; font-family="sans-serif";">Cuidado, você está muito abaixo do peso!</p>
    `
  } else if(imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `
     <p style="color: #E85E00; margin-bottom:0.4rem; font-size:1rem; font-family="sans-serif";"  "> Seu resultado é:</p> <span style="color: #E85E00; margin-bottom:0.8rem; font-family="sans-serif";" >${imc.toFixed(2)}</span>
     <p style="color: #E85E00;"font-size:0.8rem; font-family:sans-serif;"> Você está abaixo do peso!</p>
    `
  } else if(imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = `
        <p style="color: #E85E00; margin-bottom:0.4rem; font-size:1rem; font-family="sans-serif";" "> Seu resultado é:</p> <span style="color: #E85E00; margin-bottom:0.8rem; font-family="sans-serif";" >${imc.toFixed(2)}</span>
     <p style="color: #E85E00;"font-size:0.8rem; font-family:sans-serif;"> você está no peso ideal!</p>
    `
  } else if(imc > 25 && imc <= 29.99) {
       resultado.innerHTML = `
        <p style="color: #E85E00; margin-bottom:0.4rem; font-size:1rem; font-family="sans-serif";"  "> Seu resultado é:</p> <span style="color: #E85E00; margin-bottom:0.8rem; font-family="sans-serif";" > ${imc.toFixed(2)}</span>
     <p style="color: #E85E00;"font-size:0.8rem; font-family:sans-serif;">Cuidado, Você está acima do peso!</p>
       `
  } else if(imc >= 30) {
     resultado.innerHTML = `
       <p style="color: #E85E00; margin-bottom:0.4rem; font-size:1rem; font-family="sans-serif";"  "> Seu resultado é:</p> <span style="color: #E85E00; margin-bottom:0.8rem; font-family="sans-serif";" >${imc.toFixed(2)}</span>
     <p style="color: #E85E00;"font-size:0.8rem; font-family: sans-serif;">Cuidado, Cuidado Obesidade!</p>
     `
  }

  document.getElementById("peso").value = '';
  document.getElementById("altura").value = '';
}

