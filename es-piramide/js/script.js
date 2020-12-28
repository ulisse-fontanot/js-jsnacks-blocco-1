var vuoto = [];
var aste = "*";
var spazio = " ";

for (var i = 0; i < 7; i++) { //---PER CAMBIARE NUMERO RIGHE i < n
  spazio += " ";
  vuoto.push(spazio);
}

for (var c = 6; c > 0; c--) {  //---PER CAMBIARE NUMERO RIGHE c = n-1
  console.log(vuoto[c] + aste);
  aste += "*" + "*";
}
