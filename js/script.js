//CHIEDO ALL'UTENTE DI INSERIRE IL SUO NOME
var nome = prompt('Inserisci il tuo nome');

//CHIEDO ALL'UTENTE DI INSERIRE IL SESSO
var sesso = prompt('Inserisci il tuo sesso: f o m');

//METTO IL MIO SPAN IN UNA VARIABILE E AGGIUNGO UNA CLASSE
var nomeutente = document.getElementById('nome-utente');

if (sesso == "f") {
   nomeutente.innerHTML = nome;
   nomeutente.style.color = "pink";
 } else if (sesso == "m"){
   nomeutente.innerHTML = nome;
   nomeutente.style.color = "blue";
} else {
  alert('Attenzione stai sbagliando a scrivere il sesso')
}
