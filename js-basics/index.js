//  thirdparty code has be placed in the head sections
// what we here have is statement a statement is peice of code that expresses an action to be carried out in the case we want to log
// all statements in javascript should be terminated by a semicolon(;)
// what we have here in between single codes i called string a sting is sequenece of character now in javascript we also
// this repersent a comment (//) here you can some discreption to your code this is ignored by javascript
// we want explaine why and hows
// this is javascript code
//console.log('Hello World');
let name ="Annis"; // string Literal
let age=25; // number Literal
let isApproved  =true; //Boolean literal we use this situations where we want to have some logic for example if theb order is approved then it need to be shipped so the value of a boolean variable can be rue or false and by the way note are reserved keywords they cannot be variables names
let fastName = undefined;
let lastName = null;

console.log(name); // the console we see undefined so by default variables taht we defined in js their value is indifined how we can optionally initialize this



//rules it cannot be  reserved keyword  let is one of them if else var  else
// Should be meaningful labels
// cannot not start with a number  (1name)
// cannot contain a space or hypertext(-)
// if you want to declare multiple variables there are two ways to do this
//let firstName; //camelnotaion case sensitive
//let firstName = "Annis", lastName = "Lahdili";
//let firstName ='Annis';
//let  lastName='Lahdili'; // the modern best practice is to declare each variab with a le on a single line so we terminate this first declaraion with a simicolon and decalre the second variable new line thats the modern


//constants
// a Programming raradigm centerded ariund object rather than functions
//tool OOP is not a programming language or tool C#, java, ruby, ptython, javascript
//pillars of Objecct-oriented programming


const interestRate = .03;
interestRate =1;
console.log(interestRate);

//however in real world application there are situztions that we dont want the value of a vatiable to change because otherxise it going to create  all kinds of bugs in our application
//in those situations instead of a vatiable we use a cosntant so that the value of a avaribale as the names implies can change but the value of constant cannot change so
// the best practice if you dont need to reassign constant should be your default otherwise if you need to reassign a variable use let
//primitive Types
// we have seen strings we have more types basically i js we have two categories of types on one side we have primiitves also called value types
//primitives/value types or reference types in theb category of primitives we have strings, number , boolean undifined and null
