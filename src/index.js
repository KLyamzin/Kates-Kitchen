import "./styles.css";
import { renderHome } from "./home";
import { renderAbout } from "./about";

renderHome();
const containerDiv = document.getElementsByClassName("container");
const headerDiv = document.querySelector(".header");
const mainDiv = document.getElementsByClassName("main");
const footerDiv = document.getElementsByClassName("footer");

const headerLinks = document.querySelectorAll("li");
let active = document.querySelector(".active");
headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linkTarget = e.target.innerText;
    active.classList.remove("active");
    e.target.classList.add("active");
    if (linkTarget === "HOME") {
      renderHome();
    }
    if (linkTarget === "ABOUT US") {
      renderAbout();
    }
  });
});
