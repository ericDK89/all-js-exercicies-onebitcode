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
const allKeys = document.querySelectorAll(".char-btn");
const outputInput = document.getElementById("output-result");
const copyInput = document.getElementById("copy-btn");
const switchThemeBtn = document.getElementById("switch-theme-btn");
const body = document.getElementById("body");

allKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.dataset.value !== "=") {
      inputCalc.value += key.dataset.value;
    }

    if (key.dataset.value === "C") {
      inputCalc.value = "";
    }

    if (key.dataset.value === "=") {
      calculate();
    }
  });
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

const calculate = () => {
  outputInput.value = "Error";
  outputInput.classList.add("error");

  const result = eval(inputCalc.value);
  outputInput.value = result;
  outputInput.classList.remove("error");
};

copyInput.addEventListener("click", () => {
  navigator.clipboard.writeText(outputInput.value);
  copyInput.innerText = "Copied!";

  setTimeout(() => {
    copyInput.innerText = "Copy";
  }, 3500);
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
