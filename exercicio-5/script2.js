let moneyAmountAvailable = Number(prompt("Quanto dinheiro tem disponível?"));
let options = "";

do {
  options = Number(
    prompt(`
    Você tem R$${moneyAmountAvailable} disponível.
  
    Selecione uma das opções:
    1. Adicionar
    2. Remover
    3. Encerrar
  `)
  );

  switch (options) {
    case 1:
      const addMoney = Number(
        prompt("Quanto de dinheiro gostaria de adicionar?")
      );
      moneyAmountAvailable += addMoney;
      break;

    case 2:
      const removeMoney = Number(
        prompt("Quanto de dinheiro gostaria de adicionar?")
      );
      moneyAmountAvailable -= removeMoney;
      break;

    case 3:
      alert("Encerrando...");
      options = 3;
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (options !== 3);
