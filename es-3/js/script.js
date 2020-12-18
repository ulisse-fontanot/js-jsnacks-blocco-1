var lista = ["Jenny", "Donald", "Mosby", "Frank", "Judith"];
var nome = prompt('inserisci il tuo nome');
var primaLettera = nome.charAt(0).toUpperCase();
var restoNome = nome.substring(1).toLowerCase();
var nome = primaLettera + restoNome;
var messaggio = false;

for (var i = 0; i < lista.length; i++){
  if (nome == lista[i]){
    messaggio = true;
  }
}

if (messaggio == true){
  console.log('nominativo presente');
} else {
  console.log('nominativo non presente');
}
