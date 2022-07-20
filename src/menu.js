import { resetMain } from "./reset";
import coffeeMachine from "./assets/pexels-michael-burrows-7125662.png";
import sandwich from "./assets/pexels-suzy-hazelwood-1209029.jpg";
import eggDishImage from "./assets/pexels-kiro-wang-7463313.png";
import desertImage from "./assets/pexels-engin-akyurt-2478319.jpg";
const mainDiv = document.querySelector(".main");
// Menu Items
const foodSections = ["COFFEE", "MAIN", "DESSERTS"];
const coffee = {
  Espresso: " $3.50",
  ["Double Espresso"]: " $5.50",
  Latte: " $6.50",
  Cappuccino: " $5.50",
  ["Double Cappuccino"]: " $7.50",
  Amercano: " $4.50",
  ["Double Amercano"]: " $5.50",
  ["Extra Espresso Shot"]: " $1.00",
};
const eggsDish = {
  ["Avocado Toast"]: " $7.00",
  ["Pan-fried Eggs With Lox"]: " $12.00",
  ["Avocado Toast With Egg"]: " $10.45",
  ["Avocado Toast With Lox"]: " $11.00",
  ["Omelette with Vegetables"]: " $10.00",
  ["Omelette with Lox"]: " $13.45",
};
const dessert = {
  ["Waffle With Cond. Milk"]: "$5.00",
  ["Cake Of The Day"]: "$4.50",
  ["Cheese Cake"]: "$5.45",
  ["French Croissant"]: "$6.45",
  ["Muffin"]: "$3.95",
  Cupcake: "$3.50",
};
// Calling the functions
const renderMenu = () => {
  resetMain(mainDiv);
  addMenuSections(coffee, coffeeMachine, foodSections[0]);
  addMenuSections(eggsDish, eggDishImage, foodSections[1]);
  addMenuSections(dessert, desertImage, foodSections[2]);

  function addMenuSections(item, image, section) {
    const itemContainer = document.createElement("div");
    const itemHeader = document.createElement("p");
    const itemImage = document.createElement("img");
    const itemSelections = document.createElement("div");
    // elementsCreate();
    for (let key in item) {
      itemSelections.innerHTML += `<p class="food-name"> ${key} <span class='dots'> ................................................................................................................................... </span><span class="food-price"> ${item[key]}</span></p>`;
    }
    itemHeader.innerText = section;
    itemImage.setAttribute("src", image);
    // }
    // function elementsCreate() {
    itemHeader.classList.add("food-header");
    itemContainer.classList.add("food-container");
    itemSelections.classList.add("food-selections");
    itemImage.classList.add("food-image");

    itemContainer.appendChild(itemHeader);
    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemSelections);
    mainDiv.appendChild(itemContainer);
  }
};
export { renderMenu };
