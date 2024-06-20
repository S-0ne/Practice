const A = 0.5;
const B = 1;
const M = 10;

const H = (B - A) / M;

function f(x) {
  return Math.acos(x);
}

let X = [];
let fValues = [];

for (let i = 0; i <= M; i++) {
  let Xi = A + i * H;
  X.push(Xi);
  fValues.push(f(Xi));
}

console.log("X values: ", X);
console.log("f(X) values: ", fValues);