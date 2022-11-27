//DOM
//select - apply

const h1 = document.getElementById("title");
h1.style.color = "red";
//Better way is to use a variable for multiple things

//Otherwise
document.getElementById("title").style.backgroundColor = "blue";
document.getElementById("title").style.color = "white";
//Repetition

//tags
const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
//to select the first

const items = document.getElementsByTagName("li");

// items.forEach((item) => {
//   console.log(item);
//   //an error -> an array is needed
// });

const betterItems = [...items];
// array

betterItems.forEach((item) => {
  console.log(item);
});

items[2].style.color = "orange";

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";
// don't forget # or .

const lastItem = document.querySelector("li:last-child");
//for the last item

const list = document.querySelectorAll(".special");

list.forEach((item) => {
  item.style.color = "yellow";
});

//NODE
const result2 = document.querySelector("#result");
const allChildren = result2.childNodes;
//many items as we use nodes

const children = result2.children;
//less as we use only children

//PARENTS
const heading = document.querySelector("h2");
const parent = heading.parentElement;
parent.style.color = "red";
//if we add more headings (even h3 will be RED)

//SIBLINGS
const first = document.querySelector(".first");
const second = (first.nextSibling.nextSibling.style.color = "red");
// 2 times otherwise a white space
const first1 = document.querySelector(".first");
first.nextElementSibling.style.color = "red";
//other way

//nodeValue
const item1 = document.getElementById("special");
const value = item1.firstChild.nodeValue;
//to get the value in 2 STEPS

//textContent
const easyValue = item1.textContent;
//in 1 STEP
