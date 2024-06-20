function countOInName(fullName) {

    let nameParts = fullName.split(' ');

    let name = nameParts[1];

    let count = 0;

    for (let i = 0; i < name.length; i++) {
        if (name[i].toLowerCase() === 'о') {
            count++;
        }
    }

    return count;
}


let fullName = "Васильвич Олександр Гоголь";
let numberOfO = countOInName(fullName);
console.log("Кількість букв 'о' в імені:", numberOfO);