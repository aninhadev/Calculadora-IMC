function calcular() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function exibirResultado() {
  let resultado = calcular();
  document.getElementById("res").innerHTML = "Seu IMC é " + resultado;
}

document.querySelector('#btnCalcular').addEventListener("click", exibirResultado);
