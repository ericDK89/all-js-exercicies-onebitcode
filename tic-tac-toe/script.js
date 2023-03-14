const allSquares = document.querySelectorAll(".square");
let whoTime = 0;

allSquares.forEach((key) => {
  key.addEventListener("click", () => {
    if (whoTime % 2 === 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>X<span>";
      whoTime++;
    } else if (whoTime % 2 !== 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>O<span>";
      whoTime++;
    }
  });
});
