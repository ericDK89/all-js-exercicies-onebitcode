const mapTest = [
  {
    name: "Eric",
    age: 24,
  },
  {
    name: "Camila",
    age: 23,
  },
  {
    name: "Isis",
    age: 0,
  },
];

const ulList = document.getElementById("ul-list");

const createUlList = () => {
  ulList.innerHTML = mapTest
    .map((item) => {
      return `<li class="li-tag"><p>Seu nome é ${item.name} e você tem ${item.age} anos.</p></li>`;
    })
    .join("");
};

createUlList();

const addNewContact = () => {
  const newContact = {
    name: "Teste",
    age: 99,
  };

  mapTest.push(newContact);
  createUlList();
};

const removeContact = () => {
  mapTest.pop();

  createUlList();
};
