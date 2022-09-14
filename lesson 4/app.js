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