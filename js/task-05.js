const textInput = document.querySelector("#name-input");
console.log(textInput);
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  nameOutput.textContent =
    textInput.value !== "" ? event.currentTarget.value : "Anonymous";
});
