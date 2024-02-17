let resultado = 0;

while (true) {
  let numero = parseInt(prompt("Coloque um número aqui"));

  if (numero === 0) {
    break;
  }

  resultado += numero;
}

console.log(`A soma dos números inseridos é: ${resultado}`);