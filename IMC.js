const peso = parseFloat(prompt("Digite seu peso"))
const altura = parseFloat(prompt("Digite sua altura(em cm)"))

const imc = peso/(altura*altura) 

if(imc<18.5){
  alert("Magreza")
}

else if(18.5<=imc<25){
  alert("Normal")
}

else if(25<=imc<30){
  alert("Sobrepeso")
}

else if(30<=imc<40){
  alert("Obesidade")
}

else{
  alert("Obesidade grave")
}
