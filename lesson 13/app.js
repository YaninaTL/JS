//Attributes

const links = document.querySelectorAll(".first");
//node list

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
//the first line of the list

const idValue = first.getAttribute("id");
//looks for the id

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
//show a link

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "I also have a class of first";

//Classes
const first1 = document.getElementById("first");
const second2 = document.getElementById("second");
const third3 = document.getElementById("third");

const classValue1 = first1.className;
console.log(classValue1);
//to check properties

second2.className = "colors";
//added

second2.className = "text";
//second2.className = "colors text";

third3.classList.add("colors");
third3.classList.add("text");
//added
//OR
third3.classList.add("text", "colors");

third3.classList.remove("text", "colors");
//removed

let result = third3.classList.contains("color");
//has a class
if (result) {
  console.log("hello");
} else {
  console.log("bye");
}

const classValue3 = third3.classList;
console.log(classValue3);
