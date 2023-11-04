const buttonDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
console.log(buttonDecrement.dataset.action);
const buttonIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
console.log(buttonIncrement.dataset.action);
const span = document.querySelector("#value");
let counterValue = 0;
// зменшення
buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
// збільшення
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
