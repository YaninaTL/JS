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




