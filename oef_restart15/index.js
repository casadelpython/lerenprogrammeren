// Print de veelvouden van een gegeven getal
let number =parseInt(prompt("Voer het getal in "));
for (let i = 1; i <= 100; i++){
    if (i % number === 0){
        console.log(i)
    }
}

// Deze loop print veelvouden van het getal dat door de gebruiker is ingevoerdt door de modules-berekening te beruiken (i % number === 0)