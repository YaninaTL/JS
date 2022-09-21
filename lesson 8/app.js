//Arrays and for loop

const names = ['Anna', 'Susy', 'Bob', 'John'];
const lastName = 'Moon';

let newArray = [];

for(let i = 0;i < names.length;i++) {
    console.log(i);
  //0 1 2 3 -> amount of items in our array
    console.log(names[i]);
  //0 Anna 1 Susy and so on
    newArray.push(names[i]);
}

    console.log(names);
    console.log(newArray);
    //We have two identical arrays

    newArray.push(`${names[i]} ${lastName}`);
    //an option to add last name
    // const fullName = `${names[i]} ${lastName}`
    //newArray.push(fullName);
    //Don't forget a console log (see above)
