let pessoa = {
    nome: 'Joao',
    idade: 21,
    cidade: 'Rio de Janeiro',
  };
  
  for (let propriedade in pessoa){
    console.log(propriedade+ ': ' + pessoa[propriedade])
  }