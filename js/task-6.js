function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const boxesInput = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  boxesContainer.innerHTML = ""; // Очищаємо контейнер перед створенням нових блоків
  const amount = parseInt(boxesInput.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return console.log("Invalid"); // Повідомлення про невірне введення
  }

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  boxesInput.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
