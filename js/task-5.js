function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorSpan = document.querySelector("span.color");

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", handleChangeColor);

function handleChangeColor(event) {
  event.preventDefault();

  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}
