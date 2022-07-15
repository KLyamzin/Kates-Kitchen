import "./styles.css";

const containerDiv = document.getElementsByClassName("container");
const headerDiv = document.querySelector(".header");
const mainDiv = document.getElementsByClassName("main");
const footerDiv = document.getElementsByClassName("footer");

const listOfLinks = document.createElement("ul");
listOfLinks.classList.add("list-of-links");
headerDiv.appendChild(listOfLinks);
