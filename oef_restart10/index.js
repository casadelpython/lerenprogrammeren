//Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een
// for-loop om de tafel van dat getal te printen
let tafel=parseInt(prompt("geef de tafel in")); // tafel is het getal dat je ingeeft via de prompt
let eindGetal=parseInt(prompt("dit is hier jouw eindgetal:")) // ook het eingetal is wat je ingeeft via de prompt
// De lus blijft draaien zolang i kleiner dan of gelijk aan eindGetal is.
// Na elke iteratie (oftewel elke ronde van de lus) wordt i met 1 verhoogd (i++).
// console.log Deze functie wordt gebruikt om tekst naar de console te schrijven, zodat je het resultaat kunt zien.
// Dit is een template literal. Het is een manier om tekst en variabelen samen te voegen in een string.
//${tafel} en ${i} zijn placeholders die worden vervangen door de waarden van de variabelen tafel en i.
//tafel * i berekent het product van de waarde van tafel en de huidige waarde van i.
for (let i=1; i <= eindGetal; i++){
    console.log(`${tafel} x ${i} = ${tafel * i}`);
}