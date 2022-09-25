//Global Scope vs Local Scope

//Global -> access the value anywhere

//Local 

let name = 'Bob';

function calculate() {
    //Going to add name
    const name = 'John'
    //Nothing has changed in console

    //Add a new one
    const age = "25";

    becomesGlobal = 'global variable';
    //Can be accessed if called and logged as JS helps to identify the value (don't have key words: let/const)
};
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

function add(num1, num2){
const result = num1 + num2 + globalNumber;
return result;
}

console.log(add(3,4));
//values for num1, num2

