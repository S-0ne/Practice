const a = 1;
const b = 1.5;
const xStart = 0.1;
const xEnd = 1;
const step = 0.1;

function calculateQ(x, b) {
  const bx = b * x;
  if (bx < 1) {
    return bx - Math.log(bx);
  } else if (bx === 1) {
    return 1;
  } else {
    return bx + Math.log(bx);
  }
}

let xValues = [];
let qValues = [];

for (let x = xStart; x <= xEnd; x += step) {
  x = parseFloat(x.toFixed(2));
  xValues.push(x);
  qValues.push(calculateQ(x, b));
}

console.log(" x | Q(x) ");
console.log("-----------");
for (let i = 0; i < xValues.length; i++) {
  console.log(`${xValues[i].toFixed(2)} | ${qValues[i].toFixed(6)}`);
}