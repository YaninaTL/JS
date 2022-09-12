document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("this is awesome");
  });
});

document.write('hello world!')
alert('hello people')
console.log('hello it is me');
// Can see in the browser console 

// Could be without semicolon, used to show the end of the command


// Variables
// Strings
let address, zip, state;
address = '101 main street';
console.log(address);

zip = '60040';
state = 'CA';
console.log(address, zip, state);

const name = "My name's..."
// OR
const name1 = 'My name\'s...'
// They are equal

const firstName = 'Yanina';
const lastName = 'Tormos Lopez';
let fullName;
console.log('Hello there your full name is : ' + firstName + '' + lastName);
// OR
/* let fullName = firstName + "" + lastName;
console.log("Hello there your full name is : " + fullName); */

// Concatenation
const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);
// Open Google

// Numbers
const number = 34;
let shirt = 2.333;
shirt = 'are great';

console.log(number); 
// 34
console.log(shirt);
// are great

const number2 = 2.456;

console.log(number);
// 34
console.log(number2);
// 2.456

const number3 = '2.456';
console.log(number3)
// 2.456 BUT it's a string
// DIFFERENT COLOR: number is BLUE in console log, string is BLACK


// Basic math operations
const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

// Shortcuts
let number_ = 40;
number_ += 5;
number_ += 5;
number_ += 5;
number_ += 5;
number_ += 5;
number_ += 5;
// ++ -> +=1
// -- -> -=1

console.log(number_)
// 70


// Easy task
const slices = 10;
const children = 3;
const amount = 10 / 3;
// amount = slices / children 

console.log(amount);
// 3.333

// Better to use % in this case

const amountCertain = slices % children;
console.log(amountCertain);
// 2








