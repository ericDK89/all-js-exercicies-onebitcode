export const eachKeyVerification = () => {
  if (key.dataset.value !== "=") {
    inputCalc.value += key.dataset.value;
  }

  if (key.dataset.value === "C") {
    inputCalc.value = "";
  }

  if (key.dataset.value === "=") {
    calculate();
  }
};
