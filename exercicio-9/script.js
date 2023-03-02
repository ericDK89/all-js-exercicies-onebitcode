let options = 0;
let result = 0;

const triangle = (base, height) => {
  return (base * height) / 2;
};

const rectangle = (base, height) => {
  return base * height;
};

const square = (side) => {
  return side * side;
};

const trapeze = (biggerBase, minorBase, height) => {
  return ((biggerBase + minorBase) * height) / 2;
};

const circle = (radius) => {
  return Math.PI * (radius * radius);
};

do {
  options = Number(
    prompt(`
  Calculadora geométrica. 

  Opções de calculo:

  1. Área do triângulo: base x altura / 2
  2. Área do retângulo: base x altura 
  3. Área do quadrado: lado²
  4. Área do trapézio: (base maior + base menor) x altura / 2
  5. Área do círculo: pi x raio² (considere pi = 3.14)
  6. Sair.
  `)
  );

  switch (options) {
    case 1:
      const triangleBase = Number(prompt("Qual a largura do triângulo?"));
      const triangleHeight = Number(prompt("Qual a altura do triângulo?"));
      result = triangle(triangleBase, triangleHeight);
      alert(`Área do triângulo: ${result}`);
      break;

    case 2:
      const rectangleBase = Number(prompt("Qual a largura do retângulo?"));
      const rectangleHeight = Number(prompt("Qual a altura do retângulo?"));
      result = rectangle(rectangleBase, rectangleHeight);
      alert(`Área do retângulo: ${result}`);
      break;

    case 3:
      const squareSide = Number(prompt("Qual o tamanho do lado do quadrado?"));
      result = square(squareSide);
      alert(`Área do quadrado: ${result}`);
      break;

    case 4:
      const trapezeBiggerBase = Number(
        prompt("Qual a base maior do trapézio?")
      );
      const trapezeMinorBase = Number(prompt("Qual a base menor do trapézio?"));
      const trapezeHeight = Number(prompt("Qual a altura do trapézio?"));
      result = trapeze(trapezeBiggerBase, trapezeMinorBase, trapezeHeight);
      alert(`Área do trapézio: ${result}`);
      break;

    case 5:
      const circleRadius = Number(prompt("Qual o raio do círculo?"));
      result = circle(circleRadius);
      alert(`Área do círculo: ${result}`);
      break;

    case 6:
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (options !== 6);
