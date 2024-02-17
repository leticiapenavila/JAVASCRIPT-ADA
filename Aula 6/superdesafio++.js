const quantidade = 3;
const tentativas = 3;

for (let i = 1; i <= tentativas; i++){

const dado1 = Math.floor(Math.random() * 9) +1;
const dado2 = Math.floor(Math.random() * 9) +1;
const dado3 = Math.floor(Math.random() * 9) +1;

alert(`Tentativa ${i}: Dado 1: ${dado1}, Dado 2: ${dado2}, Dado 3: ${dado3} `);
const resultado = (dado1 + dado2 + dado3);
alert(`soma ${i}: ${resultado}`);

if(i === tentativas){
alert(`Tentativas esgotadas. Fim de jogo`)
break;
}
}