const sorteado = Math.floor(Math.random() * 100)
let chute
let contador = 5

while (contador > 0) {
    chute = parseInt(prompt(`Digite o número sorteado (tentativas restantes ${contador})`))
    
    if( chute > sorteado){
      console.log("Tente novamente, o valor é menor")
    } else if( chute < sorteado){
      console.log("Tente novamente, o valor é maior")
    } else console.log("Parabéns, você acertou")

    contador--;
} 
if (contador ===0){
  console.log(`Você excedeu o numero de tentativas`)
}
