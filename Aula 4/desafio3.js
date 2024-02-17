/*Determinação do Maior Número
● Escreva um programa que receba três números como entrada e
determina o maior deles. Imprima o número mais alto.*/

const numero1 = 15
const numero2 = 10
const numero3 = 20

if (numero1 >= numero2 && numero1 >= numero3){
  console.log("o número maior é: " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3){
  console.log("O maior número é: " + numero2);
} else {console.log("O maior número é: " + numero3);
}
