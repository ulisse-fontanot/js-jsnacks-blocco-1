var numeroRandom = numeri(1,100);
var numeroUtente = parseInt(prompt("Prova a indovinare il numero tra 1 e 100"));

console.log(numeroRandom);

for (var i = 0; i < 4; i++) {
  if (numeroUtente == numeroRandom) {
    console.log("Hai indovinato!!! Il numero è: " + numeroRandom);
  } else if (numeroUtente < numeroRandom){
    numeroUtente = parseInt(prompt("Riprova, il numero era piccolo"));
  } else {
    numeroUtente = parseInt(prompt("Riprova, il numero era grande"));
  }

  if (i == 3 && numeroUtente != numeroRandom) {
    console.log("Mi dispiace, hai perso!!!");
  }
}







//FUNZIONI
function numeri(min,max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}
