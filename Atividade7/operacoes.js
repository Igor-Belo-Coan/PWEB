var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));

var soma = num1 + num2;
var sub = num1 - num2;
var prod = num1 * num2;
var div = num1 / num2;
var rest = num1 % num2;

alert(
    `Número 1: ${num1} 
    \nNúmero 2:  ${num2}
    \nSoma = ${soma} 
    \nSubtração de ${num1} - ${num2} = ${sub}
    \nProduto = ${prod}
    \nDivisão de ${num1} / ${num2} = ${div}
    \nResto da divisão de ${num1} / ${num2} = ${rest}` 
);
