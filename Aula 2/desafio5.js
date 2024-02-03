const numeros = [3, 8, 15, 21, 30, 37, 42]

const pares = numeros.filter(numero => numero % 2 === 0) 

console.log(pares)


// OU

const numeros2 = [3, 8, 15, 21, 30, 37, 42]

console.log([numeros2[1], numeros2[4], numeros2[6]])

// OU

const numeros3 = [3, 8, 15, 21, 30, 37, 42]

numeros3.shift()
numeros3.splice(1, 2)
numeros3.splice(2, 1)


console.log(numeros3)
