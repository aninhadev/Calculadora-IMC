function calcularIMC(altura, peso) {
  const imc = peso / (altura ** 2);
  return imc.toFixed(2);
}

function exibirResultado() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (isNaN(altura) || isNaN(peso)) {
    document.getElementById("res").innerHTML = "Por favor, preencha os campos corretamente";
    return;
  }

  const resultado = calcularIMC(altura, peso);

  let mensagem;
  if (resultado <= 18.5) {
    mensagem = "Você está em estado de magreza";
  } else if (resultado <= 24.9) {
    mensagem = "Você está com um peso saudável";
  } else if (resultado <= 29.9) {
    mensagem = "Você está com sobrepeso";
  } else if (resultado <= 39.9) {
    mensagem = "Você está com obesidade";
  } else {
    mensagem = "Você está com obesidade grave";
    const minhaImagem = document.createElement('img');
    minhaImagem.src = 'images/doctorfruits.png';
    const minhaDiv = document.getElementById('imgdoctor');
    minhaDiv.appendChild(minhaImagem);
  }

  document.getElementById("res").innerHTML = `Seu IMC é ${resultado} ${mensagem}`;
}

function limpar() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("res").innerHTML = "";

  var d = document.getElementById("imgdoctor");
  var d_interno = document.querySelector('img');
  var noRemovido = d.removeChild(d_interno);

}

document.getElementById('btnCalcular').addEventListener("click", exibirResultado);
document.getElementById('btnLimpar').addEventListener("click", limpar);
