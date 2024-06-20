const prompt = require("prompt-sync")()

function getInput() {
    const x = parseFloat(prompt("Enter the value of x:"));
    const y = parseFloat(prompt("Enter the value of y:"));
    const z = parseFloat(prompt("Enter the value of z:"));
    return { x, y, z };
}

function calculateT(x, y) {
    return Math.sqrt(x) + y;
}

function calculateP(t, z) {
    return 1 / t + 1 / z;
}

function outputResult(p) {
    console.log("The value of p(x, y, z) is: " + p);
}

function main() {
    const { x, y, z } = getInput();
    const t = calculateT(x, y);
    const p = calculateP(t, z);
    outputResult(p);
}

main();