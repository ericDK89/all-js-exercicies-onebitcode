import { switchTheme } from "./switch-theme.js";
import { calculate, inputCalc } from "./calculate.js";
import { copyInputFunction, copyInput } from "./copy.js";
import { allowedKeys } from "./allowed-keys.js";
import { eachKeyVerification } from "./each-key-verification.js";

const allKeys = document.querySelectorAll(".char-btn");
const switchThemeBtn = document.getElementById("switch-theme-btn");

allKeys.forEach((key) => {
  key.addEventListener("click", eachKeyVerification);
});

inputCalc.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (allowedKeys.includes(e.key)) {
    inputCalc.value += e.key;
  }

  if (e.key === "Backspace") {
    inputCalc.value = inputCalc.value.slice(0, -1);
  }

  if (e.key === "Enter") {
    calculate();
  }
});

copyInput.addEventListener("click", copyInputFunction);
switchThemeBtn.addEventListener("click", switchTheme);
