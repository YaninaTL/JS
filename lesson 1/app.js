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
let fullName = firstName + "" + lastName;
console.log("Hello there your full name is : " + fullName);


const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);
// Open Google






