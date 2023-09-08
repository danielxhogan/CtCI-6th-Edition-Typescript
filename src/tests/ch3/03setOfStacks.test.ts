import { SetOfStacks } from "../../solutions/ch3/03SetOfStacks";

interface TestData {
    in: number[][];
    out: number[][];
}

let tests: TestData[] = [];

// test 1
let stack1 = new SetOfStacks(5);
stack1.push(6);
stack1.push(6);
stack1.push(6);
stack1.push(6);
stack1.push(6);

stack1.push(47);

// prettier-ignore
const out1 = [
    [6, 6, 6, 6, 6],
    [47]
];

const test1: TestData = {
    in: stack1.stackSet,
    out: out1
};

tests.push(test1);

// test 2
let stack2 = new SetOfStacks(5);
stack2.push(6);
stack2.push(6);
stack2.push(6);
stack2.push(6);
stack2.push(6);

stack2.push(47);
stack2.push(21);
stack2.push(63);
stack2.push(524);
stack2.push(897);

stack2.push(111);
stack2.pop();
stack2.pop();

// prettier-ignore
const out2 = [
    [6, 6, 6, 6, 6],
    [47, 21, 63, 524]
];

const test2: TestData = {
    in: stack2.stackSet,
    out: out2
};

tests.push(test2);

// test 3
let stack3 = new SetOfStacks(5);
stack3.push(6);
stack3.push(6);
stack3.push(6);
stack3.push(6);
stack3.push(6);

stack3.push(47);
stack3.push(21);
stack3.push(63);
stack3.push(524);
stack3.push(897);

stack3.push(111);
stack3.popAt(1);

// prettier-ignore
const out3 = [
    [6, 6, 6, 6, 47],
    [21, 63, 524, 897, 111]
];

const test3: TestData = {
    in: stack3.stackSet,
    out: out3
};

tests.push(test3);

// test 4
let stack4 = new SetOfStacks(5);
stack4.push(6);
stack4.push(6);
stack4.push(6);
stack4.push(6);
stack4.push(6);

stack4.push(47);
stack4.push(21);
stack4.push(63);
stack4.push(524);
stack4.push(897);

stack4.push(111);
stack4.popAt(1);
stack4.popAt(4);

// prettier-ignore
const out4 = [
    [6, 6, 6, 6, 21],
    [63, 524, 897, 111]
];

const test4: TestData = {
    in: stack4.stackSet,
    out: out4
};

tests.push(test4);

// test 5
let stack5 = new SetOfStacks(5);
stack5.push(6);
stack5.push(6);
stack5.push(6);
stack5.push(6);
stack5.push(6);

stack5.push(47);
stack5.push(21);
stack5.push(63);
stack5.push(524);
stack5.push(897);

stack5.push(111);
stack5.popAt(1);
stack5.popAt(4);
stack5.popAt(5);

// prettier-ignore
const out5 = [
    [6, 6, 6, 6, 21],
    [524, 897, 111]
];

const test5: TestData = {
    in: stack5.stackSet,
    out: out5
};

tests.push(test5);

// test 6
let stack6 = new SetOfStacks(5);
stack6.push(6);
stack6.push(6);
stack6.push(6);
stack6.push(6);
stack6.push(6);

stack6.push(47);
stack6.push(21);
stack6.push(63);
stack6.push(524);
stack6.push(897);

stack6.push(24);
stack6.push(54);
stack6.push(856);
stack6.push(7);
stack6.push(159);

stack6.push(665);
stack6.push(24);
stack6.push(743);
stack6.push(564);
stack6.push(356);

stack6.push(87);
stack6.push(856);
stack6.push(214);
stack6.push(114);
stack6.push(652);

stack6.push(89);
stack6.push(65);
stack6.push(375);
stack6.push(86);

stack6.popAt(5);
stack6.popAt(12);
stack6.popAt(23);
stack6.popAt(14);
stack6.popAt(20);

// prettier-ignore
const out6 = [
    [6, 6, 6, 6, 6],
    [21, 63, 524, 897, 24],
    [54, 856, 159, 665, 743],
    [564, 356, 87, 856, 214],
    [652, 65, 375, 86]
];

const test6: TestData = {
    in: stack6.stackSet,
    out: out6
};

tests.push(test6);

// test 7
let stack7 = new SetOfStacks(5);
stack7.push(6);
stack7.push(6);
stack7.push(6);
stack7.push(6);
stack7.push(6);

stack7.push(47);
stack7.push(21);
stack7.push(63);
stack7.push(524);
stack7.push(897);

stack7.push(24);
stack7.push(54);
stack7.push(856);
stack7.push(7);
stack7.push(159);

stack7.push(665);
stack7.push(24);
stack7.push(743);
stack7.push(564);
stack7.push(356);

stack7.push(87);
stack7.push(856);
stack7.push(214);
stack7.push(114);
stack7.push(652);

stack7.push(89);
stack7.push(65);
stack7.push(375);
stack7.push(86);

stack7.popAt(5);
stack7.popAt(12);
stack7.popAt(23);
stack7.popAt(14);
stack7.popAt(20);

stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();
stack7.pop();

// prettier-ignore
const out7 = [];

const test7: TestData = {
    in: stack7.stackSet,
    out: out7
};

tests.push(test7);

for (const testData of tests) {
    test("testing SetOfStacks", () => {
        expect(testData.in).toStrictEqual(testData.out);
    });
}
