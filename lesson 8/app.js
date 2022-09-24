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

    //Functions, return, if, arrays, for loop

    const gas = [18, 20, 22, 23];
    const food = [150, 60, 110];

    function calculateTotal(arr) {
      let total = 0;
      for(let i = 0; i < arr.length; i++);
      //i < arr.length -> it's a stopper
      // {console.log(arr[i]);}
      
      {
        total += arr[i]
      }
      // console.log(total)
      //See the sum of: 18 + 20 + 22 + 23
      
      if(total > 100) {
        console.log(`YOUR SPENDING ARE TOO HIGHT!`);
        return total; 
      }
      console.log(`You are doing well!`);

      return total;
    }
    // calculateTotal(gas);
    //18, 20, 22, 23
    //The function is working

    const gasTotal = calculateTotal(gas);
    const foodTotal = calculateTotal(food);
    const randomTotal = calculateTotal([200, 4000, 500, 1]);

    console.log({
      gas:gasTotal,
      food:foodTotal,
      random:randomTotal,
    });
    //gas: sum, food: sum....

  //Object

  let person = {name:'Bob'};
  let person2 = person;

  

  console.log(`The name of the first person is ${person.name}`);
  console.log(`The name of the second person is ${person2.name}`);
  // Bob in both cases


  //If we change the value
  person2.name = "Susy";
  //Susy in BOTH cases (because it's an OBJECT - reference)




  //Null and Undefined

  let number = 20 + null 
  //20 + 0 -> 20

  let number2 = 20 + undefined; 
  //20 + 0 -> NaN
  //We didn't set the value (even not 0)


  //Truthy and Falsy




