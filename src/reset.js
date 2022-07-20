const resetMain = (div) => {
  div.innerHTML = "";
};

const resetActive = () => {
  let active = document.querySelectorAll(".active");
  active.forEach((el) => {
    el.removeAttribute("class", "active");
  });
  let buttonCheck = document.getElementById("closeCheckbox");
  buttonCheck.checked = false;
};
const addActive = (link) => {
  link.classList.add("active");
};
export { resetMain, resetActive, addActive };
