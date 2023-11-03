// First
const categoriesList = document.getElementById("categories");
const itemList = document.querySelectorAll(".item");
console.log("Number of categories:", itemList.length);
// Second
const titleItems = document.querySelectorAll("#categories .item");
titleItems.forEach((titleItem) => {
  const textTitle = titleItem.querySelector("h2").textContent;
  const numberOfElements = titleItem.querySelectorAll("li").length;
  console.log(`Category: ${textTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
