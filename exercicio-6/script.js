let number = Number(prompt("De qual número gostaria de ver a tabuada?"));
let multiplier = 1;
let multiplicationTable = [];
let result = 0;

for (number; multiplier <= 20; multiplier++) {
  result = number * multiplier;
  multiplicationTable.push(result);
  alert(`${number} x ${multiplier} = ${result}`);
}

alert(`Tabuada do ${number}: 
  ${multiplicationTable.join("\n")}
`);
