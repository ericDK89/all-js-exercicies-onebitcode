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

const allDevsList = document.getElementById("all-devs");

const insertListHTML = () => {
  allDevsList.innerHTML = `
  ${allDevs
    .map((dev) => {
      return `
      <li>
        <span style="display: block">Nome do desenvolvedor: ${dev.name}</span>
        ${dev.techs
          .map((tech) => {
            return `
            <span>Nome da tecnologia: ${tech.name} (${tech.time} anos).</span>
          `;
          })
          .join("")}
      </li>
      <br/>
    `;
    })
    .join("")}
`;
};

insertListHTML();

const createLabel = (text, htmlFor) => {
  const newLabel = document.createElement("label");
  newLabel.innerText = text;
  newLabel.for = htmlFor;
  return newLabel;
};

const createInput = (id, value, name, type) => {
  const newInput = document.createElement("input");
  newInput.id = id;
  newInput.name = name;
  newInput.type = type;
  newInput.value = value;
  return newInput;
};

const creteDevForm = document.getElementById("create-dev-form");
const addTechBtn = document.getElementById("add-tech-btn");
let rows = 0;

addTechBtn.addEventListener("click", () => {
  const newDevInfos = document.getElementById("new-dev-infos");

  const newRow = document.createElement("li");
  newRow.id = `new-row-${rows}`;
  newRow.className = "new-rows";
  rows++;

  const techNameLabel = createLabel("Nome da tecnologia", `tech-${rows}`);
  techNameLabel.style = "margin-right: 10px";
  const techNameInput = createInput(`tech-${rows}`, null, "tech-name", "text");

  const techsLabelsTime = createLabel("Experiência: ", null);
  techsLabelsTime.style = "margin-left: 10px";

  const techTimeInput1 = createInput(`${rows}1`, "0-2", `time${rows}`, "radio");
  const techTimeLabel1 = createLabel("0-2 anos", null);

  const techTimeInput2 = createInput(`${rows}2`, "3-4", `time${rows}`, "radio");
  const techTimeLabel2 = createLabel("3-4 anos", null);

  const techTimeInput3 = createInput(`${rows}3`, "5+", `time${rows}`, "radio");
  const techTimeLabel3 = createLabel("5+ anos", null);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.id = `remove-row-btn-${rows}`;
  removeRowBtn.innerText = "Remover";
  removeRowBtn.style = "margin-left: 10px";

  removeRowBtn.addEventListener("click", () => {
    newDevInfos.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    techsLabelsTime,
    techTimeInput1,
    techTimeLabel1,
    techTimeInput2,
    techTimeLabel2,
    techTimeInput3,
    techTimeLabel3,
    removeRowBtn
  );

  newDevInfos.appendChild(newRow);
});

const newDevForm = document.getElementById("create-dev-form");

newDevForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let devFullName = document.getElementById("fullname-input").value;
  let inputsRows = document.querySelectorAll(".new-rows");

  let technologies = [];

  inputsRows.forEach((row) => {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="tech-name"]'
    ).value;
    const techTime = document.querySelector(
      `#${row.id}` + ' input[type="radio"]:checked'
    ).value;

    technologies.push({ name: techName, time: techTime });
  });

  const newDev = {
    name: devFullName,
    techs: technologies,
  };

  allDevs.push(newDev);

  devFullName = "";
  inputsRows.forEach((row) => {
    row.remove;
  });

  insertListHTML();
});
