
var element = document.getElementById("gioca");
element.addEventListener('click',
function() {
  var numeroRandom = numeri(1,6);
  var numeroUtente = numeri(1,6);

  console.log(numeroRandom);
  console.log(numeroUtente);


  document.getElementById('computer').innerHTML = numeroRandom;
  document.getElementById('utente').innerHTML = numeroUtente;


  if (numeroRandom == 4) {
    console.log("Ha vinto il computer!!!");
    document.getElementById('vince-pc').innerHTML = "Ha vinto il computer!!!";
  } else {
    document.getElementById('vince-pc').innerHTML = "";
  }

  if (numeroUtente == 4) {
    console.log("Hai vinto tu!!!");
    document.getElementById('vince-utente').innerHTML = "Hai vinto tu!!!";
  } else {
    document.getElementById('vince-utente').innerHTML = "";
  }
}
);








//FUNZIONI
function numeri(min,max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}
