// Loops

let amount = 10;

while(amount > 0) {
    console.log('I have ' + amount + ' dollars and I am going to the mall');
    amount--;
    //it's going down till 0
    //it's endless (almost) as the condition is always met (10 > 0)
}


//DO WHILE
let money = 0;

do{
    console.log('You have ' + money + ' dollars');
    money++;
}
while(money < 10);
//Run at least once (ignoring while)


let i;
for(i = 0; i < 10; i++) {
    console.log('and the number is : ' + i);
}
//i < 10 -> stop point
//i++ -> endless loop
//i -> just a common name for a variable

for(let number = 11; number >= 0; number--) {
    console.log('and the number is : ' + number);
}