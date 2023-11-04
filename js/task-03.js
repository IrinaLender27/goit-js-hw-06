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
const imageItems = document.querySelector(".gallery");
imageItems.classList.add("gallerystyle");
imageItems.style.display = "flex";
imageItems.style.flexDirection = "column";
imageItems.style.gap = "40px";
console.log(imageItems);
const markup = images
  .map(
    ({ url, alt }) => `<li><img src =${url} alt = ${alt} width = 300px></li>`
  )
  .join("");
imageItems.insertAdjacentHTML("beforebegin", markup);
console.log();
// const items = ingredients.map((ingredient) => {
//   console.log(ingredient);
//   const newItems = document.createElement("li");
//   newItems.textContent = ingredient;
//   newItems.classList.add("item");
//   return newItems;
// });
// ingredientsItems.append(...items);
