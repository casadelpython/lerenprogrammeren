let eindGetal=parseInt(prompt("geef je getallen in"))
for (let i = 0; i <= eindGetal; i++){
    if (i % 2 === 0){
        console.log(`hier ijn je even getallen ${i}`);
    }
}
/*
prompt: Deze functie vraagt de gebruiker om een invoer.
Het toont een venster waarin de gebruiker een getal kan invoeren.
parseInt: Deze functie converteert de string die de gebruiker invoert naar een geheel getal.
 Dit is belangrijk, omdat we met getallen willen werken, niet met strings.
 */
/*
Loop Initiatie: Hier beginnen we een for-loop. let i = 0 betekent dat we starten bij 0.
Conditie: i <= eindGetal betekent dat de loop doorgaat zolang i kleiner is dan of gelijk aan de waarde van eindGetal.
Incrementeer i: i++ verhoogt de waarde van i met 1 bij elke iteratie.
Dit is belangrijk om ervoor te zorgen dat de loop uiteindelijk stopt.
 */
/*
Even Check: De if-voorwaarde controleert of i even is. Dit gebeurt met de modulusoperator %. Hier is wat het doet:
i % 2 geeft de rest van de deling van i door 2.
Als de rest 0 is (=== 0), betekent dit dat i even is.
 */

/*
Printen: Als i even is, wordt het getal geprint in de console met behulp van console.log(). De tekst ${i} wordt vervangen door de waarde van i, zodat je het specifieke even getal ziet.
Samenvatting
De gebruiker voert een getal in dat de bovenlimiet van de loop bepaalt.
De loop begint bij 0 en gaat door tot het opgegeven getal.
Voor elke iteratie controleert de loop of het huidige getal even is en print het als dat het geval is.
Voorbeeld
Stel dat de gebruiker 10 invoert:

De loop checkt de getallen 0 tot 10.
Het zal de even getallen printen: 0, 2, 4, 6, 8, 10.
Zo werkt je code! Als je nog vragen hebt of iets verder wilt verduidelijken, laat het me weten!





 */