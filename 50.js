function findMaxIndex(arr) {
    if (arr.length === 0) return -1;

    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function productBetweenZeroes(arr) {
    let firstZeroIndex = -1;
    let secondZeroIndex = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (firstZeroIndex === -1) {
                firstZeroIndex = i;
            } else {
                secondZeroIndex = i;
                break;
            }
        }
    }

    if (firstZeroIndex === -1 || secondZeroIndex === -1) {
        return 0;
    }

    let product = 1;
    for (let i = firstZeroIndex + 1; i < secondZeroIndex; i++) {
        product *= arr[i];
    }

    return product;
}

const array = [1.5, 0, 3.2, -4.5, 0, 2.1, 5.3];

const maxIndex = findMaxIndex(array);
console.log(`Номер максимального елемента масиву: ${maxIndex}`);

const product = productBetweenZeroes(array);
console.log(`Добуток елементів між першим і другим нульовими елементами: ${product}`);