import { resetMain } from "./reset";
import staffImage from "./assets/pexels-ketut-subiyanto-4349918.jpeg";

const renderAbout = () => {
  const mainDiv = document.querySelector(".main");
  resetMain(mainDiv);

  const placeNameContainer = document.createElement("div");
  placeNameContainer.classList.add("place-name-container");

  const placeName = document.createElement("p");
  placeName.classList.add("place-name");
  placeName.innerText = "About Us";

  const placeNameSub = document.createElement("p");
  placeNameSub.classList.add("place-name-sub");
  placeNameSub.innerText = "Meet Our Amazing Staff";

  const placeOwner = document.createElement("img");
  placeOwner.classList.add("place-owner");
  placeOwner.setAttribute("src", staffImage);

  const placeWelcome = document.createElement("p");
  placeWelcome.classList.add("place-welcome");
  placeWelcome.innerText = `Our stuff:`;

  placeNameContainer.appendChild(placeName);
  placeNameContainer.appendChild(placeNameSub);
  mainDiv.appendChild(placeNameContainer);
  mainDiv.appendChild(placeOwner);
  mainDiv.appendChild(placeWelcome);
};

export { renderAbout };
