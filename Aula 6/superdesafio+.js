const dado1 = Math.floor(Math.random() * 9) +1;
const dado2 = Math.floor(Math.random() * 9) +1;
const quantidade = 2;

for (let i = 1; i < quantidade; i++){
  const resultado = dado1 + dado2;
  console.log(resultado)
}

console.log(dado1)
console.log(dado2)