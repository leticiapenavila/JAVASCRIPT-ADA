const listaDeCompras = new Map()
listaDeCompras.set("Maçã", 5)
listaDeCompras.set("Banana", 3)
listaDeCompras.set("Leite", 4)
listaDeCompras.set("Pão", 10)

console.log(listaDeCompras.has("Maçã"))
console.log(listaDeCompras.get("Banana"))

//Modificar um item
listaDeCompras.set("Leite", 2)
console.log(listaDeCompras.get("Leite"))

//Deletar um item
listaDeCompras.delete("Pão")
console.log(listaDeCompras.get("Pão")) //Undefined