//Print machten van 2: Gebruik een for-loop om de machten van 2 te printen, beginnend
// bij 1, totdat de macht groter is dan 1000.
//let som=1000;
//let resultaat = 1; // Start met 2^0, dat is 1
// loop voor het berekenen van machten van 2
//for (let i=1; resultaat <= som; i++){
     //resultaat *= 2; // Vermenigvuldig de huidige waarde met 2
    //console.log(resultaat);
//}

// andere manier
for (let i = 1; i <= 1000; i *= 2){
    console.log(i);
}
// De loop begint bij 1 vermenigvuldigt i telkens met 2 .
// dit zorgt ervoor dat alleen machten van 2 geprint worden i groter is dan 1000