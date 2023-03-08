let allDevs = [
  {
    name: "Eric",
    tech: {
      name: "JavaScript",
      time: "0-2",
    },
  },
  {
    name: "Virgil",
    tech: {
      name: "NodeJs",
      time: "0-2",
    },
  },
];

const allDevsList = document.getElementById("all-dev-list");

const showAllDevs = () => {
  allDevsList.innerHTML = `
  ${allDevs
    .map((dev) => {
      return `
    <li>
      <span>Nome do desenvolvedor: ${dev.name}</span>
      <span style="display: block">Nome da tecnologia: ${dev.tech.name}</span>
      <span>Quantos anos de experiência: ${dev.tech.time}</span>
    </li>
    <br />
    `;
    })
    .join("\n")}
  `;
};

showAllDevs();

const createDevForm = document.getElementById("create-dev-form");
const devNameInput = document.getElementById("dev-fullname-input");
const addNewTechBtn = document.getElementById("add-new-tech-btn");
const newTechInfosDiv = document.getElementById("new-tech-infos-div");
const cancelNewTechBtn = document.getElementById("cancel-new-tech-btn");

addNewTechBtn.addEventListener("click", () => {
  newTechInfosDiv.style.display = "block";
});

let devName = "";
let newTechName = "";
let newTechTime = "";

const newDevNameInput = document.getElementById("dev-fullname-input");
const newTechNameInput = document.getElementById("new-tech-name-input");
const newTechTimeRadio = document.querySelectorAll('input[name="time-input"]');

newDevNameInput.addEventListener("change", (e) => {
  devName = e.target.value;
});

newTechTimeRadio.forEach((item) => {
  item.addEventListener("change", (e) => {
    newTechTime = e.target.value;
  });
});

const createNewTech = (e) => {
  e.preventDefault();
  newTechName = newTechNameInput.value;

  const newDev = {
    name: devName,
    tech: {
      name: newTechName,
      time: newTechTime,
    },
  };

  allDevs.push(newDev);
  showAllDevs();

  newDevNameInput.value = "";
  newTechNameInput.value = "";
  newTechTimeRadio.value = "";
};

cancelNewTechBtn.addEventListener("click", () => {
  newTechInfosDiv.style.display = "none";
  newDevNameInput.value = "";
  newTechNameInput.value = "";
  newTechTimeRadio.value = "";
});

createDevForm.addEventListener("submit", createNewTech);
