let number = '23';
let anotherNumber = '10';

const resultOf2 = number - anotherNumber;
console.log(resultOf2); 
//3
// !JS converts a STRING to a NUMBER!

const resultOf2_ = number + anotherNumber;
console.log(resultOf2_);
//2310
// BUT + won't work as it's a STRING initially

let number1 = 23;
const resultOf2_1 = number1 + anotherNumber;
console.log(resultOf2_1);
//2310
// still a STRING

// Boolean
let value = true;
let value1 = false;

console.log(typeof value);
//boolean

//Null
const result = null;
console.log(typeof null);
//object -> it's a BUG in JS!
//Null SHOULD be null

//Null = undefined

// Arrays
//to store the data
const friend1 = 'anna';
const friend2 = 'peter';
const friend3 = 'john';
const friend4 = 'lisa';
//Not comfy when we have many values

const friends = ['anna', 'peter', 'john', 'lisa', 45, undefined, null];

console.log(friends) = [0];
//anna

console.log(friends[4]);
//45

// 2 ways to access the item

let bestFriend = friends[2];
console.log(bestFriend);
//john

friends[5] = 24;
console.log(friends[5]);
// undefined -> 24
// the value is changed

