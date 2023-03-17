const allSquares = document.querySelectorAll(".square");
let whoTime = 0;

let player1 = prompt("Qual o nome do jogador 1?");
let player2 = prompt("Qual o nome do jogador 2?");

const playerName = document.getElementById("player-name");
playerName.innerText = `Vez do jogador: ${player1}`;

const square1 = document.getElementById("square-1");
const square2 = document.getElementById("square-2");
const square3 = document.getElementById("square-3");
const square4 = document.getElementById("square-4");
const square5 = document.getElementById("square-5");
const square6 = document.getElementById("square-6");
const square7 = document.getElementById("square-7");
const square8 = document.getElementById("square-8");
const square9 = document.getElementById("square-9");

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

let waysToWin = 0;

const resetBtn = document.getElementById("reset-btn");

const xArr = [];
const oArr = [];

let endGame = false;
let win = false;

const checkWinOrDraw = () => {
  if (xArr.includes("1") && xArr.includes("2") && xArr.includes("3")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 1;
  } else if (oArr.includes("1") && oArr.includes("2") && oArr.includes("3")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 1;
  }

  if (xArr.includes("4") && xArr.includes("5") && xArr.includes("6")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 2;
  } else if (oArr.includes("4") && oArr.includes("5") && oArr.includes("6")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 2;
  }

  if (xArr.includes("7") && xArr.includes("8") && xArr.includes("9")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 3;
  } else if (oArr.includes("7") && oArr.includes("8") && oArr.includes("9")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 3;
  }

  if (xArr.includes("1") && xArr.includes("5") && xArr.includes("9")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 4;
  } else if (oArr.includes("1") && oArr.includes("5") && oArr.includes("9")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 4;
  }

  if (xArr.includes("3") && xArr.includes("5") && xArr.includes("7")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 5;
  } else if (oArr.includes("3") && oArr.includes("5") && oArr.includes("7")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 5;
  }

  if (xArr.includes("1") && xArr.includes("4") && xArr.includes("7")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 6;
  } else if (oArr.includes("1") && oArr.includes("4") && oArr.includes("7")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 6;
  }

  if (xArr.includes("2") && xArr.includes("5") && xArr.includes("8")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 7;
  } else if (oArr.includes("2") && oArr.includes("5") && oArr.includes("8")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 7;
  }

  if (xArr.includes("3") && xArr.includes("6") && xArr.includes("9")) {
    playerName.innerText = `Jogador ${player1} ganhou!`;
    win = true;
    endGame = true;
    waysToWin = 8;
  } else if (oArr.includes("3") && oArr.includes("6") && oArr.includes("9")) {
    playerName.innerText = `Jogador ${player2} ganhou!`;
    endGame = true;
    win = true;
    waysToWin = 8;
  }

  if (whoTime === 9 && !win) {
    endGame = true;
    alert("Draw");
  }
};

allSquares.forEach((key) => {
  key.addEventListener("click", async () => {
    if (whoTime % 2 === 0 && key.childElementCount !== 1 && !endGame) {
      key.innerHTML = "<span>X<span>";
      whoTime++;
      xArr.push(key.dataset.number);
      playerName.innerText = `Vez do jogador: ${player2}`;
      checkWinOrDraw();

      if (win) {
        switch (waysToWin) {
          case 1:
            square1.style = "background: black; color: white";
            square2.style = "background: black; color: white";
            square3.style = "background: black; color: white";
            break;

          default:
            break;
        }
      }
    } else if (whoTime % 2 !== 0 && key.childElementCount !== 1 && !endGame) {
      key.innerHTML = "<span>O<span>";
      whoTime++;
      oArr.push(key.dataset.number);
      playerName.innerText = `Vez do jogador: ${player1}`;
      checkWinOrDraw();
    }
  });
});

resetBtn.addEventListener("click", () => {
  allSquares.forEach((key) => {
    key.innerHTML = "";
  });

  xArr.splice(0, xArr.length + 1);
  oArr.splice(0, oArr.length + 1);

  playerName.innerText = "";

  whoTime = 0;
  endGame = false;

  player1 = prompt("Qual o nome do jogador 1?");
  player2 = prompt("Qual o nome do jogador 2?");
});
