var array = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  if (numero%2 != 0) {
    array.push(numero);
  }
}

console.log(array);
