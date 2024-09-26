let hoeveelGetallen = parseInt(prompt("hoeveel getallen ?")); // hier stel ik de vraag in prompt naar de gebruiker
let getal;
let i = 0
let som =0;

//
for(i;i<= hoeveelGetallen;i++){
    getal = parseInt(prompt(`geef getal ${i} in`));
    som = som + getal;
}
console.log(`De totale som van ${hoeveelGetallen} getallen is ${som}`);


