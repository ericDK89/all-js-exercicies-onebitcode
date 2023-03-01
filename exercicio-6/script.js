let number = Number(prompt("De qual número gostaria de ver a tabuada?"));
let multiplicationTable = [];
let result = 0;

for (let multiplier = 1; multiplier <= 20; multiplier++) {
  result = number * multiplier;
  multiplicationTable.push(`${number} x ${multiplier} = ${result} \n`);
}

alert(`Resultado da tabuada do ${number}:\n\n ${multiplicationTable.join("")}`);
