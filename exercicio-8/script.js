let properties = [];
let options = 0;

do {
  let options = Number(
    prompt(`
  Quantidade de imóveis cadastrados: ${properties.length}

  Selecione uma das opções abaixo: 

  1. Cadastrar um novo imóvel.
  2. Mostrar todos os imóveis cadastrados.
  3. Sair.
  `)
  );

  switch (options) {
    case 1:
      let propertyName = prompt("Insira o nome da propriedade.");
      let roomsAmount = Number(prompt("Insira a quantidade de quartos."));
      let bathRoomsAmount = Number(prompt("Insira a quantidade de banheiros."));
      let hasGarage = confirm(
        "O imóvel possui garagem? \n OK para sim. Cancelar para Não."
      );

      const finishPropertyCreation = confirm(`
        Tem certeza que deseja criar esse imóvel?

        Nome da propriedade: ${propertyName} 
        Quantidade de quartos: ${roomsAmount}
        Quantidade de banheiros: ${bathRoomsAmount}
        Possui garagem: ${hasGarage === true ? "Sim" : "Não"}
      `);

      if (finishPropertyCreation) {
        let newProperty = {
          name: propertyName,
          rooms: roomsAmount,
          bathRooms: bathRoomsAmount,
          hasGarage: hasGarage,
        };

        properties.push(newProperty);
        break;
      } else {
        break;
      }

    case 2:
      alert(`
      Imóveis cadastrados: 

      ${properties
        .map((property) => {
          return `
        Nome da propriedade: ${property.name} 
        Quantidade de quartos: ${property.rooms}
        Quantidade de banheiros: ${property.bathRooms}
        Possui garagem: ${property.hasGarage === true ? "Sim" : "Não"}
        `;
        })
        .join("\n")}
      `);
      break;

    case 3:
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (options !== 3);
