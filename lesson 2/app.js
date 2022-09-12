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