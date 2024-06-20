function calculateSeries(n) {
  let A = [1];
  let sum = A[0];

  for (let i = 1; i < n; i++) {
      let nextA = Math.sqrt(A[i - 1]) / (1 + Math.sqrt(A[i - 1]));
      A.push(nextA);
      sum += nextA;
  }

  return sum;
}

let sum = calculateSeries(5);
console.log("Сума перших 5 елементів ряду: " + sum);