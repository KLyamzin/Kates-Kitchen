import { resetMain } from "./reset";
import coffeeMachine from "./assets/pexels-michael-burrows-7125662.jpg";
import sandwich from "./assets/pexels-suzy-hazelwood-1209029.jpg";
import eggDish from "./assets/pexels-kiro-wang-7463313.png";
import desert from "./assets/pexels-engin-akyurt-2478319.jpg";
const renderMenu = () => {
  const mainDiv = document.querySelector(".main");
  resetMain(mainDiv);
};
export { renderMenu };
