//Callback
const numbers = [0, 1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//show all numbers

//forEach
// doesn't return a NEW array

const people = [
  { name: "Bob", age: 20, position: "Developer", id: 1 },
  { name: "Peter", age: 50, position: "The boss", id: 2 },
  { name: "Susy", age: 20, position: "Designer", id: 3 },
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

//map
//return a NEW array but the same amount

const ages = people.map(function () {
  // console.log(person);
  // return 'hello world';
  //3 times as 3 items in the array

  return person.age + 20;
  //new array with new data
});

const newPeopleArr = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const namesArr = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");
console.log(ages);

//filter
const youngPeople = people.filter((person) => {
  return person.age <= 25;
  // Bob, Susy in an ARRAY
});

// if not match -> empty array

//find
const findPerson = people.find((person) => {
  return person.id === 3;
  // Susy
});
// only for unique values, show the FIRST one that match
// returns an object NOT an array
