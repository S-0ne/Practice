const prompt = require("prompt-sync")();

function getColorByNumber(number) {
    switch (number) {
        case 1:
            return "Червоний";
        case 2:
            return "Оранжевий";
        case 3:
            return "Жовтий";
        case 4:
            return "Зелений";
        case 5:
            return "Блакитний";
        case 6:
            return "Синій";
        case 7:
            return "Фіолетовий";
        default:
            return "Неправильний номер кольору";
    }
}

const number = parseInt(prompt("Введіть порядковий номер кольору спектру (від 1 до 7):"));

if (isNaN(number) || number < 1 || number > 7) {
    console.log("Будь ласка, введіть правильний номер кольору (від 1 до 7).");
} else {
    const color = getColorByNumber(number);
    console.log(`Кольор, який відповідає номеру ${number}: ${color}`);
}