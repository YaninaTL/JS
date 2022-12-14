//Math

const number1 = 4.56789;
const result1 = Math.floor(number1);
// 4

const number2 = 4.56789;
const result2 = Math.ceil(number2);
//5

const number3 = 4.56789;
const result3 = Math.sqrt(number3);

const number4 = 4.56789;
const result4 = Math.ceil(number4);

const result5 = Math.PI;

const result6 = Math.min(5, 1, 6);
//1

const result7 = Math.max(5, 1, 6);
//6

const result8 = Math.random();
//NEVER gives 1

const result9 = Math.random() * 10;
// Have bigger numbers

const result10 = Math.floor(Math.random() * 10);
//remove decimals
//CANNOT give 10 or 1

const result11 = Math.ceil(Math.random() * 10);
// Give from 1 to 10
//const result10 = Math.floor(Math.random() * 10 + 1);

//Date
const months = [January, February];
const days = [1, 2, 3];
//and so on...

const date = new Date();
// const date = new Date('1/12/2004');
const month = date.getMonth();

console.log(months);
//5

console.log(months[month]);
//June

const day = date.getDay();
//return the index
console.log(days[day]);
// Monday

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
//to implement into the html
