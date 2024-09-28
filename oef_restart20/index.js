// print het omgekeerde  van een getal:
let number= parseInt(prompt("voer een getal in:"));
let reversed = 0;

for (let i = number; i > 0; i =(i - (i % 10)) / 10){
    let laatsteCijfer = i % 10; // Haal het laatste cijfer
    reversed = reversed * 10 + laatsteCijfer; // voeg het laatste cijfer toe aan reversed
}

console.log(reversed);

// De initiatiefase in de for loop begint met let i = number, wat ervoor zorgt dat de loop begint met het ingevoerde getal

// De voorwaarde is i > 0, wat betekent dat de loop doorgaat todat i gelijk is aan 0

//in de updatefase wordt i vermindert door telkens het laatste cijfer te verwijderen: (i - i % 10)10 . dit haalt het laatste cijfer weg

//binnen de loop wordt het omgekeerde getal opgebouwd door reversed telkens te vermingvuldigen met 10 en het laatste cijfer i % 10
// toe the voegen

// op deze manier wordt het opgekeerde van get getal berkend met een volledige for loop