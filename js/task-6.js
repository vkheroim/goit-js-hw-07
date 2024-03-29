function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesInput = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = boxesInput.value; //amount of boxes

  if (amount < 1 || amount > 100) {
    return console.log("Invalid"); //if not a number that we need
  }

  for (let i = 0; i < amount; i++) {
    //counter the number of boxes
    const box = document.createElement("div"); //creating the box
    const size = 30 + i * 10; //making the size of the box bigger each time

    //* adding the measures
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.append(box);
  }

  boxesInput.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
