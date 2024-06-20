const prompt = require("prompt-sync")();

function processNumbers(sum = 0, count = 0) {
    const number = parseInt(prompt("Введіть число (введіть 0 для завершення):"));

    if (isNaN(number)) {
        console.log("Будь ласка, введіть коректне число.");
        return processNumbers(sum, count);
    }

    if (number === 0) {
        console.log(`Сума чисел, більших за 10: ${sum}`);
        console.log(`Кількість чисел, більших за 10: ${count}`);
        return;
    }

    if (number > 10) {
        sum += number;
        count += 1;
    }

    return processNumbers(sum, count);
}

processNumbers();