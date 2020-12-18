var parola1 = prompt("inserisci una parola");
var parola2 = prompt("inserisci un'altra parola");

if (parola1.length < parola2.length) {
  console.log(parola2);
} else if (parola1.length > parola2.length) {
  console.log(parola1);
} else {
  console.log("le due parole sono lunghe uguali");
}
