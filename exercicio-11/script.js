let escalationArray = [
  {
    position: "Ponta esquerda",
    name: "Vini Jr.",
    number: 21,
  },
];

const escalationUlList = document.getElementById("escalation-list");

const playerPositionInput = document.getElementById("player-position");
const playerNameInput = document.getElementById("player-name");
const playerNumberInput = document.getElementById("player-number");
const createNewPlayerBtn = document.getElementById("create-new-player-btn");

const removePlayerInput = document.getElementById("remove-player-number");
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

  playerPositionInput.value = "";
  playerNameInput.value = "";
  playerNumberInput.value = "";
  removePlayerInput.value = "";
};

const createNewPlayer = () => {
  const newPlayer = {
    position: playerPositionInput.value,
    name: playerNameInput.value,
    number: Number(playerNumberInput.value),
  };

  const confirmNewPlayerCreation = confirm(
    `Deseja criar o jogador: 
    Nome: ${newPlayer.name} 
    Número da camisa: ${newPlayer.number}
    Posição: ${newPlayer.position}`
  );

  if (confirmNewPlayerCreation) {
    escalationArray.push(newPlayer);

    createEscalationUlList();
  }
};

const removePlayer = () => {
  const playerNumberToRemove = Number(removePlayerInput.value);

  const escalationWithoutDeletedPlayer = escalationArray.filter(
    (player) => player.number !== playerNumberToRemove
  );

  const confirmRemovePlayer = confirm(
    `Tem certeza que deseja remover o jogador de camisa número ${playerNumberToRemove}?`
  );

  if (confirmRemovePlayer) {
    escalationArray = escalationWithoutDeletedPlayer;
    createEscalationUlList();
  }
};

createEscalationUlList();
