const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;

while (true) {
    let input = prompt("Введіть число (введіть 0 для завершення):");
    let number = parseInt(input);

    if (isNaN(number)) {
        console.log("Будь ласка, введіть коректне число.");
        continue;
    }

    if (number === 0) {
        break;
    }

    if (number > 10) {
        sum += number;
        count += 1;
    }
}

console.log(`Сума чисел, більших за 10: ${sum}`);
console.log(`Кількість чисел, більших за 10: ${count}`);