// String properties

let text = 'Peter Moon';
let result = text.length;
console.log(result);

console.log(text.length);

console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());

console.log(text.charAt(0));
//P

//Not to count the index in the string to get the last value
console.log(text.charAt(text.length - 1));

console.log(indexOf('P'));
//0
//if not in the string -> -1
//if there are several same ones -> will get the index of the first

console.log(text);
console.log(text.trim());
//without the space if it's before the text

// console.log(text.startsWith('Peter'));
console.log(text.trim().toLowerCase().startsWith('peter'));
//true

console.log(text.includes('eter'));
//true

console.log(text.slice(0, 2));

console.log(text.slice(-3));
//starts from the end of the string
//oon



//Template Literals

const name_ = 'John';
const age = 25;


const value = `Hey it's ${name_} and he is ${age} years old.`;
console.log(value);



//Array Properties and Methods

let names = ['John', 'Bob', 'Anna', 'Susy', 'Peter'];

//length
console.log(names.length);
//5

console.log(names[4]);
//Peter

//How to reach the last one every time?
console.loge(names[names.length - 1]);
//Peter

//concat
const lastName = ['Sun', 'Moon', 'Heaven'];
const allNames = names.concat(lastName);
console.log(allNames)
//8 and all names

//reverse
console.log(allNames.reverse());

//unshift - shift - push - pop
allNames.unshift('Ben');
console.log(allNames);
allNames.shift('')



//splice
//Mutates the original!!!
const specificNames = allNames.splice(2, 1)
//Cut the previous array






