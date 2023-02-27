const tourist = prompt("Qual seu nome?");
let questionAboutVisitedAnotherCity = true;
let citiesAmount = 0;
let citiesNames = [];
let hasVisitedAnotherCity = prompt("Já visitou alguma cidade? (S/N)");

while (questionAboutVisitedAnotherCity === true) {
  if (hasVisitedAnotherCity === "S" || hasVisitedAnotherCity === "s") {
    cityName = prompt("Qual o nome da cidade?");
    citiesAmount++;
    citiesNames.push(cityName);
    hasVisitedAnotherCity = prompt("Já visitou alguma outra cidade? (S/N)");
  } else {
    questionAboutVisitedAnotherCity = false;
  }
}

alert(
  `
  Nome: ${tourist}
  Quantidade de cidades visitadas: ${citiesAmount}
  Cidades visitadas: ${citiesNames.join(", ")}
  `
);
