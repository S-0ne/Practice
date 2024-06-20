function processMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let minIndex = 0;
        let maxIndex = 0;

        for (let j = 1; j < row.length; j++) {
            if (row[j] < row[minIndex]) {
                minIndex = j;
            }
            if (row[j] > row[maxIndex]) {
                maxIndex = j;
            }
        }

        [row[0], row[minIndex]] = [row[minIndex], row[0]];

        [row[row.length - 1], row[maxIndex]] = [row[maxIndex], row[row.length - 1]];
    }
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

const matrix = [
    [3, 8, 1, 9, 5],
    [4, 2, 7, 6, 3],
    [5, 9, 8, 2, 1]
];

console.log('Матриця до обробки:');
printMatrix(matrix);

processMatrix(matrix);

console.log('Матриця після обробки:');
printMatrix(matrix);