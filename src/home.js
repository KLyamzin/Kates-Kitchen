const renderHome = () => {
  const mainDiv = document.querySelector(".main");

  const placeNameContainer = document.createElement("div");
  placeNameContainer.classList.add("place-name-container");

  const placeName = document.createElement("p");
  placeName.classList.add("place-name");
  placeName.innerText = "Kate's";

  const placeNameSub = document.createElement("p");
  placeNameSub.classList.add("place-name-sub");
  placeNameSub.innerText = `kitchen`;

  const placeOwner = document.createElement("img");
  placeOwner.classList.add("place-owner");
  placeOwner.setAttribute("src", "./pexels-ketut-subiyanto-4473398-2.jpeg");

  const placeWelcome = document.createElement("p");
  placeWelcome.classList.add("place-welcome");
  placeWelcome.innerText = `Welcome to Kate's Kitchen! The bakery where you will
  experience healthy and delicious prepared by our amazing staff.
  We hand-craft the best latte and avocado toasts. Our pastry has won numerous
  awards from around the word. Simply to say, we are the best! Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Vel, porro.`;

  mainDiv.appendChild(placeNameContainer);
  mainDiv.appendChild(placeOwner);
  mainDiv.appendChild(placeWelcome);
  placeNameContainer.appendChild(placeName);
  placeNameContainer.appendChild(placeNameSub);
};
export { renderHome };
