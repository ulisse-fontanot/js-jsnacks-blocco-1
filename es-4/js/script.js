var numero1 = parseInt(prompt("inserisci un numero"));
var numero2 = parseInt(prompt("inserisci un altro numero"));

if (numero1 < numero2) {
  console.log(numero2);
} else if (numero1 > numero2) {
  console.log(numero1);
} else {
  console.log("i due numeri sono pari");
}
