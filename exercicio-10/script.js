let options = 0;
let vacancies = [
  {
    name: "Dev full stack",
    description: "Front e Back end juntos",
    limitDate: new Date(2023, 01, 06),
    candidates: {
      names: ["Dante", "Virgil"],
    },
  },

  {
    name: "Dev Front end",
    description: "Somente Front end",
    limitDate: new Date(2023, 03, 05),
    candidates: {
      names: ["Dante", "Virgil"],
    },
  },

  {
    name: "Dev Back end",
    description: "Somente Back end",
    limitDate: new Date(2023, 04, 05),
    candidates: {
      names: ["Dante", "Virgil"],
    },
  },
];

//List all vacancies function

const listAllVacanciesAvailable = () => {
  const listVacancies = vacancies.map((vacancy, i) => {
    return `Índice: ${i}\nNome da vaga: ${vacancy.name}\nQuantidade de candidatos: ${vacancy.candidates.names.length}\n`;
  });

  alert(listVacancies.join("\n"));
};

//Create new vacancy function

const createANewVacancy = () => {
  const vacancyName = prompt("Qual o nome da vaga?");
  const vacancyDescription = prompt("Qual a descrição da vaga?");
  const vacancyLimitDate = prompt("Qual a data limite da vaga? (2023,12,01)");

  const newVacancy = {
    name: vacancyName,
    description: vacancyDescription,
    limitDate: new Date(vacancyLimitDate),
    candidates: {
      names: [],
    },
  };

  const finishNewVacancyCreation = confirm(`Deseja confirmar a nova vaga:
  Nome: ${newVacancy.name},
  Descrição: ${newVacancy.description},
  Data limite: ${newVacancy.limitDate},
  `);

  if (finishNewVacancyCreation) {
    vacancies.push(newVacancy);
    alert("Nova vaga criada!");
  }
};

//View a vacancy function

const viewAVacancy = () => {
  const vacancyIndex = Number(prompt("Qual o índice da vaga?"));

  alert(`
    Índice: ${vacancyIndex}
    Nome: ${vacancies[vacancyIndex].name}
    Descrição: ${vacancies[vacancyIndex].description}
    Data limite: ${vacancies[vacancyIndex].limitDate.getDate()}/${vacancies[
    vacancyIndex
  ].limitDate.getMonth()}/${vacancies[vacancyIndex].limitDate.getFullYear()}
    Quantidade de candidatos: ${vacancies[vacancyIndex].candidates.names.length}
    Nome dos candidatos: ${vacancies[vacancyIndex].candidates.names
      .map((name) => {
        return name;
      })
      .join(", ")}
`);
};

//Register a candidate to a vacancy function

const registerACandidateToVacancy = () => {
  const candidateName = prompt("Insira o nome do candidato.");
  const insertNewCandidateVacancyIndex = Number(
    prompt("Qual o índice da vaga?")
  );

  const today = new Date();

  if (today <= vacancies[insertNewCandidateVacancyIndex].limitDate) {
    const finishNewCandidate = confirm(`
    Deseja confirmar a candidatura?

    Índice: ${insertNewCandidateVacancyIndex}
    Nome: ${vacancies[insertNewCandidateVacancyIndex].name}
    Descrição: ${vacancies[insertNewCandidateVacancyIndex].description}
    Data limite: ${vacancies[
      insertNewCandidateVacancyIndex
    ].limitDate.getDate()}/${vacancies[
      insertNewCandidateVacancyIndex
    ].limitDate.getMonth()}/${vacancies[
      insertNewCandidateVacancyIndex
    ].limitDate.getFullYear()}
    Quantidade de candidatos: ${
      vacancies[insertNewCandidateVacancyIndex].candidates.names.length
    }
    `);

    if (finishNewCandidate) {
      vacancies[insertNewCandidateVacancyIndex].candidates.names.push(
        candidateName
      );
      alert("Candidatura finalizado com sucesso!");
    }
  } else {
    alert("O tempo limite da vaga já foi atingido.");
  }
};

//Delete a vacancy function

const deleteAVacancy = () => {
  const vacancyIndexToDelete = Number(
    prompt("Informe o índice da vaga que deseja excluir.")
  );

  const confirmDeleteVacancy = confirm(`Deseja excluir a vaga:
    Nome: ${vacancies[vacancyIndexToDelete].name},
    Descrição: ${vacancies[vacancyIndexToDelete].description}
    `);

  if (confirmDeleteVacancy) {
    const vacancyToDelete = vacancies.splice(vacancyIndexToDelete, 1);
    vacancies.filter((vacancy) => vacancy !== vacancyToDelete);
  }
};

//DoWhile

do {
  options = Number(
    prompt(`
  Vagas de emprego.

  Selecione uma das opções abaixo:

  1. Listar vagas disponíveis.
  2. Criar uma nova vaga.
  3. Visualizar uma vaga.
  4. Inscrever um candidato em uma vaga.
  5. Excluir uma vaga.
  6. Sair.
  `)
  );

  switch (options) {
    case 1:
      listAllVacanciesAvailable();
      break;

    case 2:
      createANewVacancy();
      break;

    case 3:
      viewAVacancy();
      break;

    case 4:
      registerACandidateToVacancy();
      break;

    case 5:
      deleteAVacancy();
      break;

    case 6:
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (options !== 6);
