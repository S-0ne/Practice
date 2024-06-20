const prompt = require("prompt-sync")();

function findLargestNegative(a, b, c) {
    const numbers = [a, b, c];
    const negatives = numbers.filter(num => num < 0);

    if (negatives.length === 0) {
        return "Усі числа додатні";
    } else {
        return Math.max(...negatives);
    }
}

const a = parseInt(prompt("Введіть перше ціле число:"));
const b = parseInt(prompt("Введіть друге ціле число:"));
const c = parseInt(prompt("Введіть третє ціле число:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Будь ласка, введіть цілі числа.");
} else {
    const result = findLargestNegative(a, b, c);
    console.log(result);
}