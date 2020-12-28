var listaNumeri = [];
var somma = 0;

while (somma < 50) {
  var numero = parseInt(prompt("inserisci un numero"));
  listaNumeri.push(numero);
  somma += numero;
}


console.log(listaNumeri);
console.log(somma);
