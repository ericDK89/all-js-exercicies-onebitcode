let divide = 1;

const media = (...number) => {
  const sum = number.reduce((acc, num) => acc + num, 0);
  return sum;
};

console.log(media(2, 5));
