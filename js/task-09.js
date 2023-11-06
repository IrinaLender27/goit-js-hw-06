const button = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.body;
button.addEventListener("click", changeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
}
