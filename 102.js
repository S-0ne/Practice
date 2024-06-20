const fs = require('fs');
const readline = require('readline');

class DeviationEntry {
  constructor(reasonCode, shop, month, amount, normHours) {
    this.reasonCode = reasonCode;
    this.shop = shop;
    this.month = month;
    this.amount = parseFloat(amount);
    this.normHours = parseFloat(normHours);
  }
}

async function getInput(prompt) {
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

function saveEntriesToFile(entries, filename) {
  const data = JSON.stringify(entries, null, 2);
  fs.writeFileSync(filename, data, 'utf8');
}

function loadEntriesFromFile(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  const entriesData = JSON.parse(data);
  return entriesData.map(
    (entry) =>
      new DeviationEntry(
        entry.reasonCode,
        entry.shop,
        entry.month,
        entry.amount,
        entry.normHours
      )
  );
}

function groupAndSummarize(entries) {
  const summary = {};
  let totalAmount = 0;
  let totalNormHours = 0;

  entries.forEach((entry) => {
    if (!summary[entry.reasonCode]) {
      summary[entry.reasonCode] = { amount: 0, normHours: 0 };
    }
    summary[entry.reasonCode].amount += entry.amount;
    summary[entry.reasonCode].normHours += entry.normHours;

    totalAmount += entry.amount;
    totalNormHours += entry.normHours;
  });

  return { summary, totalAmount, totalNormHours };
}

function printAndSaveResults(summary, totalAmount, totalNormHours, filename) {
  const results = [];
  for (let reasonCode in summary) {
    const result = `Шифр причини відхилення: ${reasonCode}, Сума: ${summary[reasonCode].amount}, Нормогодини: ${summary[reasonCode].normHours}`;
    console.log(result);
    results.push(result);
  }

  const totalResult = `Підсумки по відомості: Сума: ${totalAmount}, Нормогодини: ${totalNormHours}`;
  console.log(totalResult);
  results.push(totalResult);

  fs.writeFileSync(filename, results.join('\n'), 'utf8');
}

async function main() {
  const entries = [];
  const inputFilename = 'inputData.json';
  const resultsFilename = 'results.txt';

  while (true) {
    const reasonCode = await getInput('Введіть шифр причини відхилення: ');
    const shop = await getInput('Введіть цех: ');
    const month = await getInput('Введіть місяць: ');
    const amount = await getInput('Введіть суму: ');
    const normHours = await getInput('Введіть нормогодини: ');

    entries.push(new DeviationEntry(reasonCode, shop, month, amount, normHours));

    const more = await getInput('Бажаєте додати ще один запис? (так/ні): ');
    if (more.toLowerCase() !== 'так') {
      break;
    }
  }

  saveEntriesToFile(entries, inputFilename);

  const loadedEntries = loadEntriesFromFile(inputFilename);

  const { summary, totalAmount, totalNormHours } = groupAndSummarize(loadedEntries);

  printAndSaveResults(summary, totalAmount, totalNormHours, resultsFilename);
}

main();