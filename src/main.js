import "./styles/main.css";

const counterButton = document.querySelector("#counter-button");

let count = 0;

counterButton.addEventListener("click", () => {
  count += 1;
  counterButton.textContent = `Clicks: ${count}`;
});
