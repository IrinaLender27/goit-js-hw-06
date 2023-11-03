const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsItems = document.querySelector("#ingredients");
const items = ingredients.map((ingredient) => {
  console.log(ingredient);
  const newItems = document.createElement("li");
  newItems.textContent = ingredient;
  newItems.classList.add("item");
  return newItems;
});
ingredientsItems.append(...items);
