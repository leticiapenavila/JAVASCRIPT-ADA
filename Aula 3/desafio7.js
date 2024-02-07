const frutas = new Map()

frutas.set("Maçã", 5.99)
frutas.set("Banana", 6.90)
frutas.set("Pêra", 2.99)
frutas.set("Uva", 2.99)

//Verificando se o valor da Maçã é mais caro do que o da Banana.
console.log(frutas.get("Maçã") > frutas.get("banana"))

//Verificando se o valor da Pêra não custa o mesmo que a Uva.
console.log(frutas.get("Pêra") == frutas.get("Uva"))