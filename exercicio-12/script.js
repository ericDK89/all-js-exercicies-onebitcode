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

const generateDevList = () => {
  const allDevList = document.getElementById("all-dev");
  allDevList.innerHTML = `
  ${allDevs.map((dev) => {
    return `
      <li>
        <span>${dev.name}</span>

      </li>
    `;
  })}
  `;
};

const newDevInfos = document.getElementById("new-dev-infos");

const addNewLine = () => {
  const techNameLabel = document.createElement("label");
  techNameLabel.for = "tech-name";
  techNameLabel.innerText = "Nome da tecnologia: ";

  const techNameInput = document.createElement("input");
  techNameInput.type = "text";
  techNameInput.id = "tech-name";
  techNameInput.name = "tech-name";

  const techTime1 = document.createElement("input");
  techTime1.type = "radio";
  techTime1.value = "0-2";
  techTime1.id = "0-2";
  techTime1.name = "time-years";

  const techTimeLabel1 = document.createElement("label");
  techTimeLabel1.for = techTime1.id;
  techTimeLabel1.innerText = "0-2 anos";

  const techTime2 = document.createElement("input");
  techTime2.type = "radio";
  techTime2.value = "3-4";
  techTime2.id = "3-4";
  techTime2.name = "time-years";

  const techTimeLabel2 = document.createElement("label");
  techTimeLabel2.for = techTime2.id;
  techTimeLabel2.innerText = "3-4 anos";

  const techTime3 = document.createElement("input");
  techTime3.type = "radio";
  techTime3.value = "5+";
  techTime3.id = "5+";
  techTime3.name = "time-years";

  const techTimeLabel3 = document.createElement("label");
  techTimeLabel3.for = techTime3.id;
  techTimeLabel3.innerText = "5+ anos";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.id = "remove-btn";
  removeBtn.innerText = "Remover tecnologia";
  removeBtn.style = "margin-left: 15px";

  const br = document.createElement("br");

  newDevInfos.append(
    techNameLabel,
    techNameInput,
    techTime1,
    techTimeLabel1,
    techTime2,
    techTimeLabel2,
    techTime3,
    techTimeLabel3,
    removeBtn,
    br
  );
};
