const allDevs = [
  {
    name: "Eric",
    techs: [
      {
        name: "JavaScript",
        time: "0-2",
      },
      {
        name: "TypeScript",
        time: "0-2",
      },
    ],
  },
  {
    name: "Virgil",
    techs: [
      {
        name: "NodeJS",
        time: "3-4",
      },
      {
        name: "ReactJS",
        time: "5+",
      },
    ],
  },
];

const allDevsList = document.getElementById("all-dev");

const showAllDevs = () => {
  allDevsList.innerHTML = `
  ${allDevs
    .map((dev) => {
      return `
    <li>
      <p>Nome do desenvolvedor: ${dev.name}</p>
      <span>Tecnologias:</span>
      ${dev.techs
        .map((tech) => {
          return `<span>${tech.name} (${tech.time} anos)</span>`;
        })
        .join(", ")}
    </li>
    `;
    })
    .join("")}
  `;
};

showAllDevs();

const createLabel = (htmlFor, text) => {
  const newLabel = document.createElement("label");
  newLabel.for = htmlFor;
  newLabel.innerHTML = text;

  return newLabel;
};

const createInput = (type, value, id, name) => {
  const newInput = document.createElement("input");
  newInput.type = type;
  newInput.value = value;
  newInput.name = name;
  newInput.id = id;

  return newInput;
};

const addTechBtn = document.getElementById("add-tech-btn");
const ulTechInfos = document.getElementById("new-dev-infos");
let rows = 0;

addTechBtn.addEventListener("click", () => {
  const newRow = document.createElement("li");
  newRow.id = `add-tech-row-${newRow}`;

  const techNameLabel = createLabel("tech-name", "Nome da tecnologia: ");
  const techNameInput = createInput("text", null, "tech-name", "tech-name");

  const experienceSpan = document.createElement("span");
  experienceSpan.innerText = " Experiência: ";

  const expInput1 = createInput("radio", "0-2", `0-2-${rows}`, `time-${rows}`);
  const expLabel1 = createLabel("0-2", "0-2 anos");

  const expInput2 = createInput("radio", "3-4", `3-4-${rows}`, `time-${rows}`);
  const expLabel2 = createLabel("3-4", "3-4 anos");

  const expInput3 = createInput("radio", "5+", `5+-${rows}`, `time-${rows}`);
  const expLabel3 = createLabel("5+", "5+ anos");

  const removeTechBtn = document.createElement("button");
  removeTechBtn.type = "button";
  removeTechBtn.innerText = "Remover tecnologia";
  removeTechBtn.style = "margin-left: 10px";

  newRow.append(
    techNameLabel,
    techNameInput,
    experienceSpan,
    expInput1,
    expLabel1,
    expInput2,
    expLabel2,
    expInput3,
    expLabel3,
    removeTechBtn
  );

  ulTechInfos.appendChild(newRow);

  rows++;

  const newTechs = [];

  newTechs.push();

  allDevs.map((item) => {
    item.techs.push();
  });

  const newDev = {
    name: techNameInput.value,
  };

  allDevs.push(newDev);

  showAllDevs();

  removeTechBtn.addEventListener("click", () => {
    ulTechInfos.removeChild(newRow);
    showAllDevs();
  });
});
