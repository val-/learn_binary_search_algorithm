const binarySearch = require('./binarySearch');
const readline = require('readline');

const numSorter = (a, b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
};

const getRandomNum = (max) => Math.floor(Math.random() * (Math.floor(max) + 1));

const getRandomList = (n) => {
    const list = [];
    for (let i = 0; i < n; i++) {
        list.push(getRandomNum(1000000));
    }
    return list.sort(numSorter);
}

const doTest = (testListLength) => {

    const testList = getRandomList(testListLength);
    const testTarget = testList[getRandomNum(testListLength - 1)];
    const { result, loopCount } = binarySearch(testTarget, testList);

    if (testList[result] !== testTarget) {
        console.error('ERROR!!!');
        console.log('result: ', result);
        console.log('testTarget: ', testTarget);
        console.log('testList: ', JSON.stringify(testList));
    }

    return loopCount;

}

const testingState = [
    {
        testListLength: 1000,
        attemptsCount: 1000,
        results: []
    },
    {
        testListLength: 10000,
        attemptsCount: 1000,
        results: []
    },
    {
        testListLength: 100000,
        attemptsCount: 1000,
        results: []
    },
    {
        testListLength: 1000000,
        attemptsCount: 1000,
        results: []
    },
];

testingState.forEach((testingBatch) => {
    for (let attempt = 0; attempt < testingBatch.attemptsCount; attempt++) {
        testingBatch.results.push(doTest(testingBatch.testListLength));
    }
});

console.log(JSON.stringify(testingState));


