const prompt = require('prompt-sync')();

let number1 = parseInt(prompt("Введіть перше дійсне число: "));
let number2 = parseInt(prompt("Введіть друге дійсне число: "));

let square1 = number1 * number1;
let square2 = number2 * number2;

let difference = square1 * square2;

console.log('Різниця квадратів ' + number1 + ' та ' + number2 + ' дорівнює ' + difference);