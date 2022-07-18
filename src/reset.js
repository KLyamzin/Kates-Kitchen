const resetMain = (div) => {
  div.innerHTML = "";
};

const resetActive = () => {
  let active = document.querySelector(".active");
  active.removeAttribute("class", "active");
};
const addActive = (link) => {
  link.classList.add("active");
};
export { resetMain, resetActive, addActive };
