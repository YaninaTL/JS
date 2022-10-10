//Callback
const numbers = [0, 1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//show all numbers

//forEach
// doesn't return a NEW array

const people = [
  { name: "Bob", age: 20, position: "Developer" },
  { name: "Peter", age: 50, position: "The boss" },
  { name: "Susy", age: 20, position: "Designer" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
  //Don't invoke!!!
}

// 1 - people.forEach(showPerson);

//DEVELOPER
//THE BOSS
//DESIGNER

//2 -
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
