// Vraag de gebruiker om het aantal producten en de prijs per product
let aantalProducten = parseInt(prompt("Voer het aantal producten in: "));
let prijsPerProduct = parseFloat(prompt("Voer de prijs per product in: "));

// Bereken de totale prijs met of zonder korting
let totalePrijs;

if (aantalProducten > 10) {
    // Als er meer dan 10 producten zijn, pas 10% korting toe
    totalePrijs = aantalProducten * prijsPerProduct * 0.9;
} else {
    // Anders betaal je de volle prijs
    totalePrijs = aantalProducten * prijsPerProduct;
}

// Toon het totale bedrag
console.log(`Het totale bedrag dat je moet betalen is: €${totalePrijs.toFixed(2)}`);
