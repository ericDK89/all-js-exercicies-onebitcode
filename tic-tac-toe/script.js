const allSquares = document.querySelectorAll(".square");
let whoTime = 0;

const winsConditions = ["1", "2", "3"];

const xArr = [];
const oArr = [];

allSquares.forEach((key) => {
  key.addEventListener("click", () => {
    if (whoTime % 2 === 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>X<span>";
      whoTime++;
      xArr.push(key.dataset.number);
    } else if (whoTime % 2 !== 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>O<span>";
      whoTime++;
      oArr.push(key.dataset.number);
    }
  });
});
