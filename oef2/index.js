// let, var, const
// let blockscope, var Universsel, const is een vast waarde
//DATATYPES
let getal = 5; //de output zal dus een NUMBER
let tekst = "Tom";
let keuze = 1;// 1 true, 0 =false //BOOLEAN£

let strNum = "123";
strNum = parseInt(strNum); //Kommagetallen

let strNum1 = "123";
StrNum1 = parseInt(strNum1);


let resultaat= strNum+strNum1
console.log(resultaat);

let person= {
    name:"annis",
    age:25,
    isStudent: false,
    haarkleur: "bruin"
}
console.log(typeof (person));
console.log(person.name);

let familieNaam ="lahdili"
let geboortejaar ="1999"
let huidigejaar="2024"
 resultaat = huidigejaar-geboortejaar;
console.log(resultaat);

// het resultaat lahdili is 25 jaar
// het resultaat vzn familinaam is 25jaar

// het reultaat van,familienaam is resultaat;

console.log("het resulaat van", familieNaam ,"is" , resultaat);
// ES6 Notatie
console.log(`het resultaat ${familieNaam} van is ${resultaat}`);

let getal1= parseInt(prompt("voer je eerste getal in"));
let getal2=parseInt(prompt("voer je tweede getal in"))
console.log(getal1+getal2);
console.log(getal1*getal2);


console.log(getal1,"+",getal2, "=",getal1+getal2);
console.log(`${getal1} + ${getal2} = ${getal1} + ${getal2}`);
console.log(`${getal1} * ${getal2} = ${getal1} * ${getal2}`);
console.log(`${getal1} /${getal2} = ${getal1} ** ${getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1}-${getal2}`);



let getal5=5
getal5-=1;Shorthandnotatie

console.log(5="5") // true
console.log(5==="5") //false








