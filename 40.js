const prompt = require("prompt-sync")();

function isValidNumber(number) {
    return number > 0 && Math.log(number) < 2.1;
}

function getInputNumbers() {
    const numbers = [];
    let input;

    while (numbers.length < 10) {
        input = prompt("Enter a positive number (or 'stop' to finish):");

        if (input.toLowerCase() === 'stop') {
            break;
        }

        const num = parseFloat(input);

        if (!isNaN(num) && isValidNumber(num)) {
            numbers.push(num);
        } else {
            alert("Invalid number or number does not meet the criteria. Please enter a valid positive number.");
        }
    }

    return numbers;
}

function processNumbers(numbers, variant) {
    if (variant % 2 !== 0) {
        numbers.sort((a, b) => a - b);
    } else {
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        console.log("Max:", max);
        console.log("Min:", min);
    }
}

function calculateStatistics(numbers) {
    let positiveSum = 0;
    let positiveCount = 0;
    let negativeProduct = 1;
    let negativeCount = 0;

    for (const number of numbers) {
        if (number > 0) {
            positiveSum += number;
            positiveCount++;
        } else if (number < 0) {
            negativeProduct *= number;
            negativeCount++;
        }
    }

    const average = positiveCount > 0 ? positiveSum / positiveCount : 0;

    return {
        positiveSum,
        positiveCount,
        negativeProduct,
        negativeCount,
        average
    };
}

const validNumbers = getInputNumbers();

const variant = 3;

processNumbers(validNumbers, variant);

const stats = calculateStatistics(validNumbers);

console.log("Filtered numbers:", validNumbers);
console.log("Positive sum:", stats.positiveSum);
console.log("Positive count:", stats.positiveCount);
console.log("Negative product:", stats.negativeProduct);
console.log("Negative count:", stats.negativeCount);
console.log("Average of positives:", stats.average);