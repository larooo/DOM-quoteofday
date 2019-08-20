import { quotes } from "./quotes.js";
import { random } from "./functions.js";

const click = document.querySelector("button");
const text = document.querySelector("#quote-text");

click.addEventListener("click", function() {
  text.innerHTML = quotes[random()];
});
