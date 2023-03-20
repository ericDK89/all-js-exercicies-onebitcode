import { outputInput } from "./copy.js";

export const inputCalc = document.getElementById("input-calc");

export const calculate = () => {
  outputInput.value = "Error";
  outputInput.classList.add("error");

  const result = eval(inputCalc.value);
  outputInput.value = result;
  outputInput.classList.remove("error");
};
