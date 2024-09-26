//Som van de eerste 10 getallen: Gebruik een for-loop om de som van de eerste 10
// getallen (1 tot 10) te berekenen.
let lijn = parseInt(prompt("Hoeveel lijnen wil je?"));
let som = 0; // Begin met een som van 0

for (let i = 1; i <= lijn; i++) {
    som += i; // Voeg i toe aan de som
}

console.log(`De som van de eerste ${lijn} getallen is: ${som}`);

// Vraag om het Aantal Lijnen:
/*
prompt("Hoeveel lijnen wil je?"): Dit toont een dialoogvenster aan de gebruiker waarin ze een getal kunnen invoeren.
Dit getal geeft aan tot welke waarde we de som willen berekenen.
parseInt(...): De waarde die door de gebruiker wordt ingevoerd, is standaard een string.
Met parseInt() wordt deze string omgezet in een geheel getal, zodat je er wiskundige bewerkingen mee kunt uitvoeren.
 */
// Initialisatie van de Som:
/*
Hier wordt een variabele som gedefinieerd en op 0 gezet.
Deze variabele zal worden gebruikt om de totale som op te bouwen terwijl we door de getallen itereren.
 */
//De for-loop
/*
let i = 1: Dit is de initiële waarde van de teller i. We beginnen met 1, omdat we willen optellen vanaf het eerste getal.
i <= lijn: Dit is de conditie voor de loop. De loop blijft draaien zolang i kleiner dan of gelijk aan de waarde van lijn is.
Dit betekent dat als de gebruiker bijvoorbeeld 10 invoert, de loop draait zolang i tussen 1 en 10 ligt.
i++: Dit betekent dat i met 1 toeneemt bij elke iteratie van de loop. Dit zorgt ervoor dat de loop uiteindelijk stopt, omdat i na 10 naar 11 zal gaan, wat niet meer aan de voorwaarde voldoet.
 */
//Optellen van de Waarde:
//