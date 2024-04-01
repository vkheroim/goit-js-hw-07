const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

// Створюємо фрагмент документа для оптимізації додавання до DOM
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const img = document.createElement("img");
  const listItem = document.createElement("li");

  img.src = image.url;
  img.alt = image.alt;

  listItem.appendChild(img);
  fragment.appendChild(listItem); // Додаємо кожен елемент li до фрагменту
});

// Додаємо фрагмент разом з усіма елементами li до DOM за одну операцію
gallery.appendChild(fragment);
