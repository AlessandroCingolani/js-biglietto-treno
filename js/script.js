/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

1. chiedere età e quanti chilometri 
2. trasforma i prompt età e km in un int
3. imposto variabile prezzo 0.21
4. sconto minorenni check if se età è compresa tra
   0 e 18 
5. sconto over 65 se età > 65 applico sconto
 */

// output price with discount
const outputTag = document.getElementById ('output');
