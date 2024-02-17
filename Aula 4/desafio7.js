const numero = 20;
let ehParOuImpar;

switch (numero % 2) {
    case 0:
        ehParOuImpar = "é par";
        break;
    case 1:
        ehParOuImpar = "é ímpar";
        break;
}

console.log("O número " + ehParOuImpar);