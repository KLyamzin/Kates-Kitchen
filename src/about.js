import { resetMain } from "./reset";
import staffImage from "./assets/pexels-ketut-subiyanto-4349918.jpeg";
import personOneImage from "./assets/pexels-ketut-subiyanto-4353583.jpg";
import personTwoImage from "./assets/pexels-ketut-subiyanto-4349815.jpg";
import personThreeImage from "./assets/pexels-ketut-subiyanto-4349736.jpg";

const persons = [
  {
    name: "Annabel",
    image: personOneImage,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicingelit. Vel, porro.",
  },
  {
    name: "Jackie",
    image: personTwoImage,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicingelit. Vel, porro.",
  },
  {
    name: "Laura",
    image: personThreeImage,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicingelit. Vel, porro.",
  },
];

const messageTextOne =
  "Not only are we, Kate's Kitchen, passionate about our local community and coffee, but we are also just as passionate about our employees. Our baristas and bakers are what create our foundation of memorable flavor and seamless service.";
const renderAbout = () => {
  const mainDiv = document.querySelector(".main");
  resetMain(mainDiv);

  const placeNameContainer = document.createElement("div");
  placeNameContainer.classList.add("place-name-container");

  const placeNameSub = document.createElement("p");
  placeNameSub.classList.add("food-header");
  placeNameSub.innerText = "MEET THE AMAZING STAFF";

  const placeOwner = document.createElement("img");
  placeOwner.classList.add("place-owner");
  placeOwner.setAttribute("src", staffImage);

  const placeWelcome = document.createElement("p");
  placeWelcome.classList.add("place-welcome");
  placeWelcome.classList.add("welcomeOne");
  placeWelcome.innerText = messageTextOne;

  const allPersonsContainer = document.createElement("div");
  allPersonsContainer.className = "all-persons-container";
  placeNameContainer.appendChild(placeNameSub);
  mainDiv.appendChild(placeNameContainer);
  mainDiv.appendChild(placeOwner);
  mainDiv.appendChild(placeWelcome);
  mainDiv.appendChild(allPersonsContainer);

  persons.forEach((person) => {
    const personContainer = document.createElement("div");
    personContainer.className = "person-container";
    const personImage = document.createElement("img");
    const personName = document.createElement("h1");
    const personQuote = document.createElement("p");
    const name = person.name;
    const quote = person.quote;
    personImage.setAttribute("src", person.image);
    personName.innerText = name;
    personQuote.innerText = quote;
    personContainer.appendChild(personImage);
    personContainer.appendChild(personName);
    personContainer.appendChild(personQuote);
    allPersonsContainer.appendChild(personContainer);
  });
};

export { renderAbout };
