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
