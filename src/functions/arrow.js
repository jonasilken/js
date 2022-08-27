// single line
const sum = (numberX, numberY) => numberX + numberY;

console.log(sum(2, 3));

const squareNumber = number => number * number;

console.log(squareNumber(10));

// multiple line
const calcRectangleArea = (large, width) => {
  return large * width;
}

const calcTriangleArea = (base, height) =>  {
  return (base * height)
}

const calcCircleArea = (radius) => {
  return Math.PI * (radius ** 2);
}

console.log(calcRectangleArea(3, 2));
console.log(calcTriangleArea(2, 3));
console.log(calcCircleArea(10));

