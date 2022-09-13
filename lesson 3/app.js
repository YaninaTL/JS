//Function

function hello() {
    console.log('Hello There Anna');
    console.log('Hello There John');
    console.log('Hello There Peter');
}

hello();
//Declaration to see the value in the console log
//good for easy changes of the values


//Params and arguments
function helloLisa() {
    console.log("Hello There Lisa");
}
function helloBob() {
    console.log("Hello There Bob");
}
function helloSusy() {
    console.log("Hello There Susy");
}

helloLisa();
//greet Lisa
helloBob();
//greet Bob
helloSusy();
//greet Susy

//Better solution

function greet(name) {
    console.log("Hello There " + name);
}

//greet Lisa
greet('Lisa');
//greet Bob
greet('Bob');
//greet Susy
greet('Susy');

//Another way
//Add const 
const lisa = 'Lisa';
const bob = 'Bob';
const susy = 'Susy';

//To greet more ppl -> add second
function greet(name, second) {
    console.log("Hello There " + name);

    console.log(second)
}

//greet Lisa and Bob
greet(lisa, 'Bob');
//greet Bob
greet(bob);
//greet Susy
greet(susy);



//1 inch 2.54cm
//RETURN


const wallHeight = 80;

function calculate(value){
    const newValue = value * 2.54;
    // console.log('The value in cm is : ' + value * 2.54 + ' cm');
    return 'newValue';
    //Need to have return
    //add const in the function

    //Another way to make the code shorter
    //return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
//[0, 0] when width = 0, height = 0
//after adding calculate and call the function -> 254 cm for the width and 203.2 cm for height

//declaration
function addValues(num1, num2) {
    return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//expression
const add = function addValues(num1, num2) {
    return num1 + num2;
};
//Can delete the name of the function
// const thirdValue = add(5, 6);
const values_ = [firstValue, secondValue, thirdValue];
// Instead of thirdValue could be:
//const values_ = [firstValue, secondValue, 11]; OR const values_ = [firstValue, secondValue, add(5, 6)];
console.log(values_)
//[7, 46, 11]

const multiply = (num1, num2) => num1 * num2;
//arrow function
