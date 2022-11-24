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
