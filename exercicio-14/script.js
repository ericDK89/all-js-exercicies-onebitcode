const media = (...numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (result = sum / numbers.length);
};

console.log(media(2, 6, 3, 7, 4, 8));

const mediaPonderada = (...numbers) => {
  const sum = numbers.reduce((acc, { num, weight }) => acc + num * weight, 0);
  const weightSum = numbers.reduce((acc, { num, weight }) => acc + weight, 0);
  return sum / weightSum;
};

console.log(
  mediaPonderada(
    { num: 7, weight: 2 },
    { num: 9, weight: 5 },
    { num: 3, weight: 1 },
    { num: 5, weight: 5 }
  )
);

const mediana = (...numbers) => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    const firstNumber = numbers[middle - 1];
    const secondNumber = numbers[middle];
    return media(firstNumber, secondNumber);
  } else {
    return numbers[middle];
  }
};

console.log(mediana(2, 4, 5, 7, 42, 99));

const moda = (...numbers) => {
  const quantities = numbers.map((number) => [
    number,
    numbers.filter((n) => n === number).length,
  ]);

  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
