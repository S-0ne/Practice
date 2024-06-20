const readline = require('readline');

function getInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function calculateSeriesSum() {
  let A = 1;
  let sum = A;
  for (let i = 1; i < 5; i++) {
    A = Math.sqrt(A) / (1 + Math.sqrt(A));
    sum += A;
  }
  return sum;
}

function t(x, y) {
  return Math.sqrt(x) + y;
}

function p(x, y, z) {
  return t(x, y) / z;
}

function printResult(label, result) {
  console.log(`${label}: ${result}`);
}

async function main() {
  const seriesSum = calculateSeriesSum();
  printResult('Sum of the first 5 elements of the series', seriesSum);

  const x = parseFloat(await getInput('Enter value for x: '));
  const y = parseFloat(await getInput('Enter value for y: '));
  const z = parseFloat(await getInput('Enter value for z: '));
  
  const pValue = p(x, y, z);
  printResult('Value of the function p(x, y, z)', pValue);
}

main();