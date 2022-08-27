function sum(numberX, numberY) {
  return numberX + numberY;
}

console.log(sum(1,2));

function calcRectangleArea(large, width) {
  return large * width;
}

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcCircleArea(radius) {
  return Math.PI * (radius ** 2);
}

console.log(calcRectangleArea(2, 5));
console.log(calcTriangleArea(2, 3));
console.log(calcCircleArea(10));
