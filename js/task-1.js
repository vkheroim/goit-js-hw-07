const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryListTitle = item.querySelector("h2").textContent;

  const categoryListElements = item.querySelectorAll("li");

  console.log(
    `Category: ${categoryListTitle}, Elements: ${categoryListElements.length}`
  );
});
