// Vraag de gebruiker om het aantal producten en de prijs per product
let aantalProducten = parseInt(prompt("Voer het aantal producten in: "));
let prijsPerProduct = parseFloat(prompt("Voer de prijs per product in: "));

// Bereken de totale prijs met of zonder korting
let totalePrijs;

if (aantalProducten >= 100) {
    // Als er meer dan 100 producten zijn, pas 10% korting toe

}else if (prijsPerProduct >= 100){
    // meer dan 100 of gelijk aan 100 is 10% korting
    totalePrijs = aantalProducten * prijsPerProduct * 0.9;
}else if(prijsPerProduct >= 50){
    // meer dan 50 of gelijk aan 50 is 5% korting
    totalePrijs = aantalProducten * prijsPerProduct * 0.95;
}

else if (prijsPerProduct < 50){
    // je betaalt de volle prijs
    totalePrijs = aantalProducten * prijsPerProduct;
}

//  totale bedrag
console.log(`Het totale bedrag dat je moet betalen is: €${totalePrijs.toFixed(2)} `);


