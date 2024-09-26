// let,var,const
// let blockscope, var universeel, cosnt is een vaste waarde
// DATATYPES

let getal = 5; // de output zal dus een NUMBER
let tekst ="Annis";
let keuze= 1; //1 = true, 0 = false /BOOLEAN !


let strNum ="123";
strNum = parseInt(strNum); //kommagetallen = parseFloat

let strNum1 ="123";
strNum1 = parseInt(strNum1);

var resultaat = strNum+strNum1;
console.log(typeof (resultaat));

let person = {
    name:"Annis",
    age:25,
    isStudent: false,
    haarkleur: "BruinZwart",

}
console.log(typeof (person));
console.log(person.name);



let familieNaam = "Lahdili";
let geboorteJaar = 1999;
let huidigeJaar = 2024;
var resultaat =huidigeJaar - geboorteJaar;
console.log(resultaat);

//resultaat van Annis is 25n jaar.

// het resultaat van familienaam is 50jaar.

//het resultaat van familieNaam is resultaat.

//ES5 Notatie
console.log("het resultaat van" , familieNaam, "is" , resultaat);
//ES6 Notatie (backtick operator)
console.log(`het resultaat van ${familieNaam}  is ${resultaat}`);

//3 + 2 = 5

let getal1=parseInt(prompt("Voer je eerste getal in"));
let getal2=parseInt(prompt("Voer je tweede getal in"));

console.log(getal1+getal2); //5
console.log(getal1*getal2); //6


console.log(getal1, "+" ,getal2,"=",getal2+getal1); //ES5
console.log(`${getal1} + ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} + ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} / ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} % ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} ** ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1+getal2}`);

let getal5 =5;
//getal5 = getal5 + 1 ;
getal5-=1;//Shorthandnotatiie

console.log(5=="5");//true

console.log(5==="5");//false


