const allSquares = document.querySelectorAll(".square");
let whoTime = 0;

let player1 = prompt("Qual o nome do jogador 1?");
let player2 = prompt("Qual o nome do jogador 2?");

const playerName = document.getElementById("player-name");
playerName.innerText = `Vez do jogador: ${player1}`;

const winsConditions = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
];

const resetBtn = document.getElementById("reset-btn");

const xArr = [];
const oArr = [];

allSquares.forEach((key) => {
  key.addEventListener("click", async () => {
    if (whoTime % 2 === 0 && key.childElementCount !== 1) {
      key.innerHTML = "<span>X<span>";
      whoTime++;
      xArr.push(key.dataset.number);
      playerName.innerText = `Vez do jogador: ${player2}`;
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

const checkWinOrDraw = () => {
  let win = false;

  if (xArr.includes(winsConditions)) {
    console.log(xArr.includes(winsConditions));
    alert("X won");
    win = true;
  }

  if (oArr.includes(winsConditions)) {
    alert("O won");
    win = true;
  }

  if (whoTime === 9 && !win) {
    alert("Draw");
  }
};
