import { TripleStack } from "../../solutions/ch3/01tripleStack";

interface TestData {
    in: number[];
    out: number[];
}

let tests: TestData[] = [];

// test 1
let ts1 = new TripleStack(18);
ts1.push(0, 5);
ts1.push(1, 5);

ts1.push(2, 5);
ts1.push(2, 5);
ts1.push(2, 5);
ts1.push(2, 5);
ts1.push(2, 5);
ts1.push(2, 5);
ts1.push(2, 5);
ts1.push(2, 7);

const out1 = [
    5,
    7,

    // stack 0
    5,
    null,
    null,
    null,
    null,

    // stack 1
    5,
    null,
    null,
    null,
    null,

    // stack 2
    5,
    5,
    5,
    5,
    5,
    5
];

const test1: TestData = {
    in: ts1.array,
    out: out1
};

tests.push(test1);

// test 2
let ts2 = new TripleStack(18);
ts2.push(0, 5);
ts2.push(1, 5);

ts2.push(2, 5);
ts2.push(2, 5);
ts2.push(2, 5);
ts2.push(2, 5);
ts2.push(2, 5);
ts2.push(2, 5);
ts2.push(2, 5);
ts2.push(2, 7);

ts2.push(1, 7);
ts2.push(1, 6);
ts2.push(1, 6);
ts2.push(1, 6);
ts2.push(1, 46);

// prettier-ignore
const out2 = [
    5,
    5,
    7,

    // stack 0
    5,
    null,
    null,
    null,

    // stack 1
    5,
    7,
    6,
    6,
    6,
    46,

    // stack 2
    5,
    5,
    5,
    5,
    5,
];

const test2: TestData = {
    in: ts2.array,
    out: out2
};

tests.push(test2);

// test 3
let ts3 = new TripleStack(18);
ts3.push(0, 5);
ts3.push(1, 5);

ts3.push(2, 5);
ts3.push(2, 5);
ts3.push(2, 5);
ts3.push(2, 5);
ts3.push(2, 5);
ts3.push(2, 5);
ts3.push(2, 5);
ts3.push(2, 7);

ts3.push(1, 7);
ts3.push(1, 6);
ts3.push(1, 6);
ts3.push(1, 6);
ts3.push(1, 46);

ts3.pop(2);
ts3.pop(2);
ts3.pop(2);
ts3.pop(2);
ts3.pop(2);
ts3.pop(2);

ts3.pop(1);
ts3.pop(1);
ts3.pop(1);

ts3.push(0, 6);
ts3.push(0, 16);
ts3.push(0, 74);
ts3.push(0, 91);

// prettier-ignore
const out3 = [
    null,
    null,
    null,

    // stack 0
    5,
    6,
    16,
    74,
    91,
    null,
    null,

    // stack 1
    5,
    7,
    6,
    null,
    null,

    // stack 2
    5,
    5,
    null,
];

const test3: TestData = {
    in: ts3.array,
    out: out3
};

tests.push(test3);

for (const testData of tests) {
    test("testing TripleStack", () => {
        expect(testData.in).toStrictEqual(testData.out);
    });
}
