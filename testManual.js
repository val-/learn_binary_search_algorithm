const binarySearch = require('./binarySearch');
const readline = require('readline');

const numSorter = (a, b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
};

const generateRl = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

let rl = generateRl();

rl.question('Input unsorted list:', (answerList) => {
    const list = answerList.split(',').map(Number).sort(numSorter);
    console.log('Sorted list:', list);
    rl.close();
    rl = generateRl();
    rl.question('Input search target:', (answerTarget) => {
        const target = Number(answerTarget);
        console.log(binarySearch(target, list))
        rl.close();
    });
});

