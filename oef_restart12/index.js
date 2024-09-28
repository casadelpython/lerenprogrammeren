//Tel af van een gegeven  getal

// Vraag de gebruiker om een getal in te voeren en converteer dit naar een integer
let getal = parseInt(prompt("Geef het getal in"));
/*
Initialisatie: let i = 1 start de teller op 1.
Voorwaarde: i <= getal zorgt ervoor dat de loop doorgaat zolang i kleiner dan of gelijk aan het opgegeven getal is.
Incrementeer: i++ verhoogt i met 1 na elke iteratie.
 */
// Start een for-loop met i op 1
for (let i = getal; i >= 0; i--) {
    // Print de huidige waarde van i naar de console
    console.log(i);
}

