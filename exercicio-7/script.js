let waitQueue = ["Eric", "Camila", "Dante", "Liz"];
let newPatient = "";
let lastPatient = "";
let options = 0;

while (options !== 3) {
  options = Number(
    prompt(`
  Lista dos pacientes na fila de espera: ${waitQueue.join(", ")}.
  
  Selecione uma das opções abaixo: 
  
  1.Novo paciente.
  2.Consultar paciente.
  3.Sair.
  
  `)
  );

  switch (options) {
    case 1:
      newPatient = prompt("Digite o nome do novo paciente:").trim();
      waitQueue.push(newPatient);
      alert(`Fila de espera: ${waitQueue.join(", ")}`);
      break;

    case 2:
      lastPatient = waitQueue.shift();

      if (!lastPatient) {
        alert("Não há pacientes na fila.");
        break;
      }

      alert(`Paciente a ser consultado: ${lastPatient}`);
      alert(`Fila de espera: ${waitQueue.join(", ")}`);
      break;

    case 3:
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
}
