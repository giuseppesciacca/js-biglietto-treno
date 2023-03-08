/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* prompt chiedere n° km e età passeggero */
const age = prompt('Inserisci la tua età:');
const distance = prompt('Inserisci i km da percorrere:');

/* prezzo totale viaggio km*price */
const unitPrice = 0.21;
let totalPrice = unitPrice * distance;

/* IF applicazioni eventuali discount */
if (age <= 18) {
    totalPrice = totalPrice * 0.8; //20% sconto
    console.log(totalPrice);
} else if (age >= 65) {
    totalPrice = totalPrice * 0.6; //40% sconto
    console.log(totalPrice);
} else {
    console.log(totalPrice); // prezzo pieno
};

/* output con due decimali */
const rounded = totalPrice.toFixed(2);
console.log(rounded); // prezzo arrotondato a 2 dec.