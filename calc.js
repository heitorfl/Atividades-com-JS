var opr=parseFloat(prompt("Qual operação você deseja? 1- Soma 2-Sub 3- Mult 4- Div"))

var num1=parseFloat(prompt("Digite o primeiro número: "))

var num2=parseFloat(prompt("Digite o segundo número: "))

switch(opr){
  case 1: 
    let soma = num1 + num2
    alert("O seu resultado é: " + soma);
    break;

  case 2:
    let sub = num1 - num2
    alert("O seu resultado é: " + sub);
    break;

  case 3:
    let mult = num1 * num2
    alert("O seu resultado é: " + mult);
    break;

  case 4:
    let div = num1 / num2
    alert("O seu resultado é: " + div);
    break; 
}

