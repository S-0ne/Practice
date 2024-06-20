function analyzeBrackets(inputString) {
    let openBracketsCount = 0;
    let closedBracketsCount = 0;
    let openBracketsPositions = [];
    let closedBracketsPositions = [];

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            openBracketsCount++;
            openBracketsPositions.push(i + 1);
        } else if (inputString[i] === ')') {
            closedBracketsCount++;
            closedBracketsPositions.push(i + 1);
        }
    }

    if (openBracketsCount === 0 && closedBracketsCount === 0) {
        console.log("Дужок у рядку немає.");
    } else {
        console.log("Кількість відкритих дужок: " + openBracketsCount);
        console.log("Позиції відкритих дужок: " + openBracketsPositions.join(', '));
        console.log("Кількість закритих дужок: " + closedBracketsCount);
        console.log("Позиції закритих дужок: " + closedBracketsPositions.join(', '));
    }
}

let inputString = "Привіт, як справи сьогодні?";
analyzeBrackets(inputString);