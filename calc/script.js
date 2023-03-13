const allowedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  " / ",
  " * ",
  " + ",
  " - ",
  ".",
  "(",
  ")",
  " % ",
];

const inputCalc = document.getElementById("input-calc");
const allBtnKeys = document.querySelectorAll(".char-btn");
const outputInput = document.getElementById("output-result");
const clearButton = document.getElementById("clear-btn");
const equalButton = document.getElementById("equal-btn");
const copyBtn = document.getElementById("copy-btn");
const body = document.getElementById("body");
const switchThemeBtn = document.getElementById("switch-theme-btn");

inputCalc.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (allowedKeys.includes(e.key)) {
    inputCalc.value += e.key;
    return;
  }

  if (e.key === "Backspace") {
    inputCalc.value = inputCalc.value.slice(0, -1);
    return;
  }

  if (e.key === "Enter") {
    calculateResult();
  }
});

allBtnKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.dataset.value !== "=") {
      inputCalc.value += key.dataset.value;
    }
  });
});

const calculateResult = () => {
  outputInput.value = "Error";
  outputInput.classList.add("error");

  const result = eval(inputCalc.value);
  outputInput.classList.remove("error");
  return (outputInput.value = result);
};

clearButton.addEventListener("click", () => {
  inputCalc.value = "";
  inputCalc.focus();
});

equalButton.addEventListener("click", () => {
  calculateResult();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputInput.value);
  alert("Copiado para área de transferência");
});

switchThemeBtn.addEventListener("click", () => {
  if (body.className === "body-dark-theme") {
    body.classList.add("body-light-theme");
    body.classList.remove("body-dark-theme");
  } else {
    body.classList.add("body-dark-theme");
    body.classList.remove("body-light-theme");
  }
});
