import { MinStack } from "../../solutions/ch3/02MinStack";

interface TestData {
    in: MinStack;
    out: number;
}

let tests: TestData[] = [];

// test 1
const minStack1 = new MinStack();
minStack1.push(5);
minStack1.push(4);

const out1 = 4;

const test1: TestData = {
    in: minStack1,
    out: out1
};

tests.push(test1);

// test 2
const minStack2 = new MinStack();
minStack2.push(9);
minStack2.push(9);
minStack2.push(9);
minStack2.push(4);
minStack2.push(5);
minStack2.pop();
minStack2.pop();
minStack2.push(6);

const out2 = 6;

const test2: TestData = {
    in: minStack2,
    out: out2
};

tests.push(test2);

// test 3
const minStack3 = new MinStack();
minStack3.push(23);
minStack3.push(31);
minStack3.push(14);
minStack3.push(12);
minStack3.push(56);
minStack3.push(11);
minStack3.push(666);
minStack3.pop();
minStack3.pop();
minStack3.pop();
minStack3.push(41);
minStack3.push(57);
minStack3.push(1);
minStack3.push(31);
minStack3.push(62);
minStack3.pop();
minStack3.pop();
minStack3.pop();
minStack3.pop();
minStack3.pop();
minStack3.pop();
minStack3.push(24);
minStack3.push(56);
minStack3.push(51);
minStack3.push(37);
minStack3.push(93);
minStack3.push(56);

const out3 = 14;

const test3: TestData = {
    in: minStack3,
    out: out3
};

tests.push(test3);

for (const testData of tests) {
    test("testing MinStack.min()", () => {
        expect(testData.in.min()).toBe(testData.out);
    });
}
