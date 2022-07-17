import "./styles.css";
import { renderHome } from "./home";

const containerDiv = document.getElementsByClassName("container");
const headerDiv = document.querySelector(".header");
const mainDiv = document.getElementsByClassName("main");
const footerDiv = document.getElementsByClassName("footer");

const headerLinks = document.querySelectorAll("li");
headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linkTarget = e.target.innerText;
    if (linkTarget === "HOME") {
      renderHome();
    }
  });
});
