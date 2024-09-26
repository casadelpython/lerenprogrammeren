
//vraag meerdere getallen en stop met een negagtief getal
let som=0
let getal;
for (;;){
    //vraag aand de gebruiker je getal
    getal =parseInt(prompt("geef een getal?"));

    //contole negatief getal
    if (getal<0){
        break;
    }
    som +=getal;

}
console.log(som);