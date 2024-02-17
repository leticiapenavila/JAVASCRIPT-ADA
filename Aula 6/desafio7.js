let entrada1 = 12
let sequencia = [1, 1]

for (let i = 2; i < entrada1; i++){
  let resultado = sequencia[i-1] + sequencia[i-2]
  sequencia.push(resultado);
}

console.log(sequencia)