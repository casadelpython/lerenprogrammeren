// Print getallen tussen 1 en n die deelbaar zijn ddor 5

let n = parseInt(prompt("Voer een getal n in:"));
for (let i = 1; i <= n; i++){
    if (i % 5 === 0){
        console.log(i)
    }
}

// Deze loop print alleen de getallen die deelbaar zijn door 5 door de modules-berekening te gebruiken.