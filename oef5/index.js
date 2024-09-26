
let naam = prompt('Geef uw naam in:');
let beroep = prompt('Geef uw beroep in, maak een keuze: bediende, arbeider,ambtenaar, werkzoekend');

if(beroep === "arbeider"){
    console.log(`Uw naam is ${naam} en uw beroep is ${beroep}`);
}else if(beroep === "bediende"){
    console.log("bediende");
}else if(beroep === "ambtenaar"){
    console.log("ambtenaar");
}
else{
    console.log("werkzoekende!");
}