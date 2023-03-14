const allSquares = document.querySelectorAll(".square");
let whoTime = 0;

let player1 = prompt("Qual o nome do jogador 1?");
let player2 = prompt("Qual o nome do jogador 2?");

const winsConditions = ["1", "2", "3"];

const playerName = document.getElementById("player-name");
playerName.innerText = `Vez do jogador: ${player1}`;

const resetBtn = document.getElementById("reset-btn");

const xArr = [];
const oArr = [];

allSquares.forEach((key) => {
  key.addEventListener("click", () => {
    if (whoTime % 2 === 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>X<span>";
      whoTime++;
      xArr.push(key.dataset.number);
      playerName.innerText = `Vez do jogador: ${player2}`;
      console.log(xArr);
    } else if (whoTime % 2 !== 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>O<span>";
      whoTime++;
      oArr.push(key.dataset.number);
      playerName.innerText = `Vez do jogador: ${player1}`;
    }
  });
});

resetBtn.addEventListener("click", () => {
  allSquares.forEach((key) => {
    key.innerHTML = "";
  });

  xArr.splice(0, xArr.length + 1);
  oArr.splice(0, oArr.length + 1);
});
