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
console.log(dimensions)
//[0, 0] when width = 0, height = 0
//after adding calculate and call the function -> 254 cm for the width and 203.2 cm for height

