const lado1 = 7
const lado2 = 1
const lado3 = 4


if (lado1 === lado2 && lado1 == lado3 && lado2 === lado3){
  console.log("Esse triângulo é equilátero")
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
  console.log("esse triângulo é isósceles")
} else (lado1 != lado2 && lado1 != lado2 && lado2 != lado3); {
  console.log("esse triângulo é escaleno")
}