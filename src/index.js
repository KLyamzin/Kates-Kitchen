import "./styles.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import { resetActive, addActive } from "./reset";
import backgroundImage from "./assets/pexels-maria-orlova-4906513.jpeg";

renderHome(addActive);
const containerDiv = document.getElementsByClassName("container");
const headerDiv = document.querySelector(".header");
const mainDiv = document.querySelector(".main");
const background = document.querySelector(".background");
background.setAttribute("src", backgroundImage);
const footerDiv = document.getElementsByClassName("footer");
const headerLinks = document.querySelectorAll("li");

headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linkTarget = e.target.innerText;
    resetActive();

    if (linkTarget === "HOME") {
      renderHome();
      addActive(e.target);
    }
    if (linkTarget === "MENU") {
      renderMenu();
      addActive(e.target);
    }
    if (linkTarget === "ABOUT US") {
      renderAbout();
      addActive(e.target);
    }
  });
});
