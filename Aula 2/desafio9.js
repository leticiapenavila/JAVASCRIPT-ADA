const notas = [8, 9, 7, 5, 10, 6]

notas.sort((a, b) => a - b)
notas.shift()
notas.pop()

console.log((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length)
