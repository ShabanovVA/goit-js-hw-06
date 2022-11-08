function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

function onRandomHexColor () {
  textColorEl.style.backgroundColor = getRandomHexColor();
}

  buttonEl.addEventListener('click', onRandomHexColor);