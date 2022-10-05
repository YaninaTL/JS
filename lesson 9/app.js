//Global Scope vs Local Scope

//Global -> access the value anywhere

//Local

let name = "Bob";

function calculate() {
  //Going to add name
  const name = "John";
  //Nothing has changed in console

  //Add a new one
  const age = "25";

  becomesGlobal = "global variable";
  //Can be accessed if called and logged as JS helps to identify the value (don't have key words: let/const)
}
calculate();
console.log(age);
//Error -> We cannot access the value outside

if (true) {
  //Going to add name
  const name = "John";
  //Nothing has changed in console
}

console.log(`My name is ${name}`);
//...Bob

//Variable Lookup
const globalNumber = 5;

function add(num1, num2) {
  const result = num1 + num2 + globalNumber;
  return result;
}

console.log(add(3, 4));
//values for num1, num2

/* function greetMorning(aName) {
  const myName = "Yanina";
  console.log(`Good morning ${aName}, my name is ${myName}`);
}

greetMorning("Bob");
*/

//Good morning Bob, my name is Yanina

//If we have a lot of options ->
//Morning, afternoon, evening

function morning() {
  return `Good morning, Bob`;
}

function greet(aName, cb) {
  const aName = "Yanina";
  console.log(`${aName}, my name is ${myName}`);
  cb();
}

greet("Bob", morning);
greet("Peter", morning);

//Callback
