let jaarTal = parseInt()prompt('Geef een jaartaal in :');
// testen van logica
if ((jaarTal%4 === 0 && jaarTal%100 !== 0 || (jaarTal % 400 === 0)){
    console.log(`${jaarTal} is een schrikkeljaar`);
}else{
    console.log(`${jaarTal} is geen schrikkeljaar`);
}