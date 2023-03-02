let deck = ["As", "Rei", "Rainha", "Valete"];
let options = 0;
let newCard;
let drawCard;

while (options !== 3) {
  options = Number(
    prompt(`
  Baralho atual: ${deck.join(", ")}

  Selecione uma das opções abaixo:

  1  Adicionar uma carta.
  2. Puxar uma carta.
  3. Sair.
  `)
  );

  switch (options) {
    case 1:
      newCard = String(
        prompt("Adicione uma nova carta. Ex.: Dez, Nove, Oito...")
      );
      deck.unshift(newCard);
      alert(`Baralho atual: ${deck.join(", ")}`);
      break;

    case 2:
      drawCard = deck.shift();
      alert(`Baralho atual: ${deck.join(", ")}`);
      break;

    case 3:
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
}
