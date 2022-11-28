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
