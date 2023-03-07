const escalationArray = [
  {
    position: "Ponta esquerda",
    name: "Vini Jr.",
    number: 21,
  },
];

let playerPosition;
let playerName;
let playerNumber;

const escalationUlList = document.getElementById("escalation-list");

const playerPositionInput = document.getElementById("player-position");
const playerNameInput = document.getElementById("player-name");
const playerNumberInput = document.getElementById("player-number");

const createNewPlayerBtn = document.getElementById("create-new-player-btn");
const removePlayerBtn = document.getElementById("remove-player-btn");

const createEscalationUlList = () => {
  escalationUlList.innerHTML = escalationArray
    .map((player) => {
      return `
    <li>
      <span style="display:block">Posição do jogador: ${player.position}</span>
      <span style="display:block">Nome do jogador: ${player.name}</span>
      <span style="display:block">Número da camisa: ${player.number}</span>
    </li>

    <br />
  `;
    })
    .join("");
};

createEscalationUlList();

const createNewPlayer = () => {
  playerPosition = playerPositionInput.value;
  playerName = playerNameInput.value;
  playerNumber = playerNumberInput.value;

  const confirmNewPlayerCreation = confirm("Deseja criar um novo jogador?");

  if (!confirmNewPlayerCreation) {
    playerNumberInput.value = "";
    playerPositionInput.value = "";
    return;
  }

  if (playerNameInput.value === "" || playerPositionInput.value === "") {
    alert("Por favor insira os dados necessários");
    return;
  }

  const newPlayer = {
    position: playerPosition,
    name: playerName,
    number: playerNumber === undefined ? 0 : playerNumber,
  };

  escalationArray.push(newPlayer);

  createEscalationUlList();

  playerNameInput.value = "";
  playerPositionInput.value = "";
};

const removePlayer = () => {
  const playerToDeleteByNumber = Number(
    prompt("Qual o número da camisa do jogador que deseja remover?")
  );

  const newEscalationWithoutDeletedPlayer = escalationArray.findIndex(
    (player) => player.number === playerToDeleteByNumber
  );

  console.log(newEscalationWithoutDeletedPlayer);

  createEscalationUlList();
};
