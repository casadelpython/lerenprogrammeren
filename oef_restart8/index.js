//Product van de eerste 5 getallen: Gebruik een for-loop om het product van de eerste 5
// getallen (1, 2, 3, 4, 5) te berekenen
let product = 1;

for (let i = 1; i <= 5; i++) {
    product *= i; // Vermenigvuldig het huidige product met i
}

console.log(product); // Dit geeft 120

// de uitleg
//1. Initialisatie van de product variabele
//1 let product = 1;
//2.Hier stellen we de variabele product in op 1.
//2.We beginnen met 1 omdat we het product gaan berekenen.
//2.Het vermenigvuldigen met 1 heeft geen invloed op andere getallen.
//2.de for-loop
//2.for (let i = 1; i <= 5; i++) {}
//3.Deze regel begint een for-loop.
// 3.We definiëren een variabele i die begint bij 1.
// 3.De loop blijft doorgaan zolang i kleiner dan of gelijk aan 5 is.
// 3. Na elke iteratie wordt i met 1 verhoogd (i++).