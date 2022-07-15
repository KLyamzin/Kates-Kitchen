import "./styles.css";
import printMe from "./menu";
// import BackgroundImage from "./pexels-klaus-nielsen-6287300.jpg";

const containerDiv = document.getElementsByClassName("container");
const headerDiv = document.querySelector(".header");
const mainDiv = document.getElementsByClassName("main");
const footerDiv = document.getElementsByClassName("footer");

const listOfLinks = document.createElement("ul");
listOfLinks.classList.add("list-of-links");
headerDiv.appendChild(listOfLinks);
printMe();
