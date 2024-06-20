function sumRows(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        result.push(sum);
    }

    return result;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Матриця:');
printMatrix(matrix);

const rowSums = sumRows(matrix);
console.log('Суми рядків:');
console.log(rowSums.join(' '));