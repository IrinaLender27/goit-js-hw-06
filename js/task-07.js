const input = document.querySelector("#font-size-control");
console.log(input);
const text = document.querySelector("#text");
console.log(text);
input.addEventListener("input", ({ currentTarget }) => {
  text.style.fontSize = currentTarget.value + "px";
});
