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

function getECTSGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 82 && score <= 89) {
    return 'B';
  } else if (score >= 74 && score <= 81) {
    return 'C';
  } else if (score >= 64 && score <= 73) {
    return 'D';
  } else if (score >= 60 && score <= 63) {
    return 'E';
  } else if (score >= 35 && score <= 59) {
    return 'FX';
  } else if (score >= 0 && score <= 34) {
    return 'F';
  } else {
    return 'Invalid score';
  }
}

async function main() {
  const score = parseFloat(await getInput('Enter the student\'s score: '));
  const grade = getECTSGrade(score);
  console.log(`The ECTS grade for a score of ${score} is: ${grade}`);
}

main();