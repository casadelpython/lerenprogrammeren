//output: tafel van 1
// 1X1 =1
// 1X2 =2
// 1X3 =3
// 1X4 =4
// 1X5 =5

let tafel=parseInt(prompt("Wat is de tafel")); //1
let eindGetal=parseInt(prompt("Geef het eindgetal")); //5
for (let i=1;i<= eindGetal;i++){

    console.log(`${tafel} x ${i} =`,tafel*i);
}


