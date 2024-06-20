const fs = require('fs');
const path = require('path');
const readline = require('readline');

class RozkladPar {
    constructor(nomerPary, predmet, prizvyshcheVykladacha, formaZanyattya) {
        this.nomerPary = nomerPary;
        this.predmet = predmet;
        this.prizvyshcheVykladacha = prizvyshcheVykladacha;
        this.formаZanyattya = formaZanyattya;
    }

    display() {
        console.log(`Номер пари: ${this.nomerPary}`);
        console.log(`Предмет: ${this.predmet}`);
        console.log(`Прізвище викладача: ${this.prizvyshcheVykladacha}`);
        console.log(`Форма заняття: ${this.formаZanyattya}`);
    }
}

class SpecialRozkladPar extends RozkladPar {
    constructor(nomerPary, predmet, prizvyshcheVykladacha, formaZanyattya, audytoria, chasPochatku) {
        super(nomerPary, predmet, prizvyshcheVykladacha, formaZanyattya);
        this.audytoria = audytoria;
        this.chasPochatku = chasPochatku;
    }

    display() {
        super.display();
        console.log(`Аудиторія: ${this.audytoria}`);
        console.log(`Час початку: ${this.chasPochatku}`);
    }

    isMorningClass() {
        const hour = parseInt(this.chasPochatku.split(':')[0], 10);
        return hour < 12;
    }

    saveToFile() {
        const data = {
            nomerPary: this.nomerPary,
            predmet: this.predmet,
            prizvyshcheVykladacha: this.prizvyshcheVykladacha,
            formaZanyattya: this.formаZanyattya,
            audytoria: this.audytoria,
            chasPochatku: this.chasPochatku
        };
        fs.writeFileSync(path.join(__dirname, `rozkladPar-${this.nomerPary}.json`), JSON.stringify(data));
    }

    static loadFromFile(nomerPary) {
        const filePath = path.join(__dirname, `rozkladPar-${nomerPary}.json`);
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return new SpecialRozkladPar(
                data.nomerPary,
                data.predmet,
                data.prizvyshcheVykladacha,
                data.formаZanyattya,
                data.audytoria,
                data.chasPochatku
            );
        }
        return null;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

const main = async () => {
    const nomerPary = await askQuestion('Введіть номер пари: ');
    const predmet = await askQuestion('Введіть предмет: ');
    const prizvyshcheVykladacha = await askQuestion('Введіть прізвище викладача: ');
    const formaZanyattya = await askQuestion('Введіть форму заняття: ');
    const audytoria = await askQuestion('Введіть аудиторію: ');
    const chasPochatku = await askQuestion('Введіть час початку (у форматі HH:MM): ');

    const specialPara = new SpecialRozkladPar(nomerPary, predmet, prizvyshcheVykladacha, formaZanyattya, audytoria, chasPochatku);
    specialPara.saveToFile();
    console.log('Дані збережено.');

    rl.close();
};

main().catch(console.error);