// Logical Operators

const name1 = 'Bob';
const age = 24;

if (name1 === 'Peter' || age === 24) {
    console.log('Hello there');
} else {
    console.log('Wrong value');
}
// Hello there

const name2 = "Peter";
const age2 = 24;

if (name2 === "Peter" && age2 === 24) {
    console.log("Hello there");
} else {
    console.log("Wrong value");
}
//Hello there


//IF 

const dice = 1;
if (dice === 1) {
    console.log('you got one')
}
if (dice === 2) {
    console.log("you got two");
}
if (dice < 1 || dice > 6) {
    console.log('roll the dice')
}

//IF ELSE

const dice_1 = 1;
if (dice_1 === 1) {
    console.log("you got one");
}
else if (dice_1 === 2) {
    console.log("you got two");
}
else {
    console.log("roll the dice");
}

//SWITCH

switch (dice) {
    case 1:
    console.log("you got one");
    break;
    case 2:
    console.log("you got two");
    break;
    default:
        console.log('roll the dice');
}


