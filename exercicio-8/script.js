let properties = [];
let propertiesAmount = 0;
let newProperty = {};
let options = 0;
let propertyName = "";
let roomsAmount = 0;
let bathRoomsAmount = 0;
let hasGarage = "";

do {
  options = Number(
    prompt(`
  Quantidade de imóveis cadastrados: ${propertiesAmount}

  Selecione uma das opções abaixo: 

  1. Cadastrar um novo imóvel.
  2. Mostrar todos os imóveis cadastrados.
  3. Sair.
  `)
  );

  switch (options) {
    case 1:
      propertyName = prompt("Insira o nome da propriedade.");
      roomsAmount = Number(prompt("Insira a quantidade de quartos."));
      bathRoomsAmount = Number(prompt("Insira a quantidade de banheiros."));
      hasGarage = prompt(
        "A propriedade possui uma garagem? (S/N)"
      ).toLocaleUpperCase();

      newProperty = {
        name: propertyName,
        rooms: roomsAmount,
        bathRooms: bathRoomsAmount,
        hasGarage: hasGarage === "S" ? true : false,
      };

      properties.push(newProperty);
      propertiesAmount++;
      break;

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
