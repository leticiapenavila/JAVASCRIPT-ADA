let idade = 16
let nacionalidade = 'brasileira'

console.log(idade >= 16 && nacionalidade == 'brasileira') //true

let idade2 = 15
let nacionalidade2 = 'brasileira'

console.log(idade2 >= 16 && nacionalidade2 == 'brasileira') // false


let idade3 = 18
let nacionalidade3 = 'brasileira'

console.log(idade3 >= 16 && nacionalidade3 == 'brasileira') // true


let idade4 = 16
let nacionalidade4 = 'eua'

console.log(idade4 >= 16 && nacionalidade4 == 'brasileira') // false


let idade5 = 15
let nacionalidade5 = 'eua'

console.log(idade5 >= 16 && nacionalidade5 == 'brasileira') // false

let idade6 = 18
let nacionalidade6 = 'eua'

console.log(idade6 >= 16 && nacionalidade6 == 'brasileira') // false



let idade7 = prompt("Digite sua idade:")
let nacionalidade7 = prompt("Digite sua nacionalidade:")
alert(idade7 >= 16 && nacionalidade == 'brasileira') // validar no navegador