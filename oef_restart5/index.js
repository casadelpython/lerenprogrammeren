let tafel=parseInt(prompt("geef de tafel in"));
let eindGetal=parseInt(prompt("dit is hier jouw eindgetal:"))

for (let i=1; i <= eindGetal; i++){
    console.log(`${tafel} x ${i} = ${tafel * i}`);
}
/*
Template Literals: De ${}-syntaxis maakt het mogelijk om variabelen in een string in te voegen.
Hier wordt tafel en i weergegeven in de tekst.
Vermenigvuldiging: tafel * i berekent de uitkomst van de vermenigvuldiging van de tafel met de huidige waarde van i.
Printen: Deze regel print de uitkomst naar de console in het formaat: "tafel x i = resultaat". Bijvoorbeeld,
als tafel 5 is en i 1, zou het 5 x 1 = 5 zijn.
/*
let i = 1: De loop begint bij 1. Dit is de eerste waarde waarvoor je de tafel wilt berekenen.
i <= eindGetal: De loop blijft draaien zolang i kleiner dan of gelijk aan het eindGetal is.
Dit zorgt ervoor dat je alle waarden tot en met dat getal verwerkt.
i++: Dit betekent dat i met 1 toeneemt na elke iteratie van de loop.
 Hierdoor gaat de loop van 1 naar 2, naar 3, enzovoort.
 */
/*
Template Literals: De ${}-syntaxis maakt het mogelijk om variabelen in een string in te voegen.
Hier wordt tafel en i weergegeven in de tekst.
Vermenigvuldiging: tafel * i berekent de uitkomst van de vermenigvuldiging van de tafel met de huidige waarde van i.
Printen: Deze regel print de uitkomst naar de console in het formaat: "tafel x i = resultaat". Bijvoorbeeld, als tafel 5 is en i 1, zou het 5 x 1 = 5 zijn.
 */