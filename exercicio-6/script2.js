let word = String(prompt("Write a word."));
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

if (reversedWord === word) {
  alert(`${reversedWord} é um palíndromo.`);
} else {
  alert(`${reversedWord} é diferente de ${word}.`);
}
