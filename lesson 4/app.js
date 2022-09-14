//Object

const person = {
    name: 'Peter',
    //Comma is IMPORTANT
    lastName: 'Moon',
    age: 40,
    education: false,
    married: true,
    siblings:['anna', 'susan', 'bob'],
    greeting: function(){
        console.log('Hello, my name is PETER');
    },
};

const age = person.age;
console.log(age);
//40


console.log(person.name);
//Peter
console.log(person.siblings[2]);
//bob
person.greeting();
//Hello, my name is PETER

//Conditions

const value = true;
// const value = 2 > 1;
//This is true
const value2 = false;
//const value2 = 1 > 2;

if (value) {
    console.log('Hello!');
} else {
    console.log('Bye!')
}
// Hello!



const num1 = 4;
const num2 = 6;

if (num1 > num2) {
    console.log('First number is bigger than second');
} else {
    console.log("Second number is bigger than first");
}
//If we have 2 equal numbers (6 and 6) -> "Second number is bigger than first" as num1 > num2 (like >=)


// !
const value_ = true;
if (!value) {
    console.log('value is true');
}
//The code won't run, it's looking for the opposite

// ==  ===
const n1 = 6;
const n2 = '6';

const value_1 = n1 == n2;
const value_2 = n1 === n2;

console.log(value_1);
console.log(value_2);
//true
//false

// != !==
//opposite