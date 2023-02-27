let moneyAmountAvailable = Number(prompt("Quanto dinheiro tem disponível?"));
let exit = false;

do {
  let options = confirm(
    `Você tem R$${moneyAmountAvailable} disponível, gostaria de adicionar mais dinheiro?`
  );

  while (options) {
    const addMoreMoney = Number(
      prompt("Quanto dinheiro a mais quer adicionar?")
    );
    moneyAmountAvailable += addMoreMoney;
    options = confirm(
      `Você tem R$${moneyAmountAvailable} disponível, gostaria de adicionar mais dinheiro?`
    );
  }

  if (!options) {
    const wishToRemoveMoney = confirm("Gostaria de remover dinheiro?");

    while (wishToRemoveMoney) {
      const removeMoreMoney = Number(
        prompt("Quanto de dinheiro gostaria de remover?")
      );
      moneyAmountAvailable -= removeMoreMoney;
      wishToRemoveMoney = confirm(
        `Você tem R$${moneyAmountAvailable}, gostaria de continuar removendo dinheiro?`
      );
    }

    if (!wishToRemoveMoney) {
      exit = confirm("Você gostaria de encerrar a aplicação?");
    }

    if (!exit) {
      options = confirm(
        `Você tem R$${moneyAmountAvailable} disponível, gostaria de adicionar mais dinheiro?`
      );
    }
  }
} while (!exit);
