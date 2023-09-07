/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

1. chiedere età e quanti chilometri 
2. trasforma i prompt età e km in un int
3. imposto variabili: prezzo,discount,totale,totale fixed 
4. check convalida se è un numero e positivo 
5. check km se è un numero e superiore a 0
6. fixo totale per centesimi 
 */

// output price 
const outputTag = document.getElementById ('output');

// price for km
const priceForKm = 0.21;

// discount
const underDiscount = 20;
const overDiscount = 40;

// variables let
let ticketCost,total,message,fixedTotal;

// dataValid
let dataValid = true;


// prompt for age in int value
const age = parseInt(prompt('How old are you?'));

if(isNaN(age)){
  message = 'Error! insert numbers for age!!'
  dataValid = false;
}else if ( age <= 0){
  message = 'Error! insert positive number!!'
  dataValid = false;
}


console.log(message);
console.log(age);
console.log(dataValid);

// prompt for km want travel
const kmToDo = parseInt(prompt('How many kilometers you want to travel'));
if(isNaN(kmToDo)){
  message = 'insert a number for Km!!'
  dataValid = false;
}else if ( kmToDo <= 0){
  message = 'Error! insert positive number!!'
  dataValid = false;
}

console.log(message);
console.log(kmToDo);
console.log(dataValid);

// cost price without discount

if(dataValid){
  ticketCost = priceForKm * kmToDo;
  if (age < 18){
    total = ticketCost - (ticketCost * (underDiscount / 100));
  }else if(age > 65){
    total = ticketCost - (ticketCost * (overDiscount / 100));
  }else{
    total = ticketCost;
  }
  // fixed total for price with cents
  fixedTotal = total.toFixed(2);
  // add const for html print cost with eur
  const textPrint =  `The price for your ticket is: ${fixedTotal}`;

  outputTag.innerHTML = textPrint + '€';
  console.log(outputTag);
}





