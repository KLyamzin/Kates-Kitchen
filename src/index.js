import "./styles.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import { resetActive, addActive } from "./reset";

renderHome(addActive);
const containerDiv = document.getElementsByClassName("container");
const headerDiv = document.querySelector(".header");
const mainDiv = document.getElementsByClassName("main");
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
