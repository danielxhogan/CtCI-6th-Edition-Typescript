import { kthToLast } from "../../solutions/ch2/02kthToLast";
import LinkedList from "../../utils/LinkedList";

interface testData {
    list: LinkedList<number>;
    k: number;
    out: number;
}

let tests: testData[] = [];

// test 1
const list1: LinkedList<number> = new LinkedList();
list1.append(5);
list1.append(5);

const k1 = 5;

const out1 = null;

const test1: testData = {
    list: list1,
    k: k1,
    out: out1
};

tests.push(test1);

// test 2
const list2: LinkedList<number> = new LinkedList();
list2.append(5);
list2.append(4);
list2.append(3);
list2.append(5);
list2.append(3);
list2.append(8);
list2.append(9);
list2.append(7);

const k2 = 5;

const out2 = 3;

const test2: testData = {
    list: list2,
    k: k2,
    out: out2
};

tests.push(test2);

// test 3
const list3: LinkedList<number> = new LinkedList();
list3.append(5);
list3.append(4);
list3.append(3);
list3.append(5);
list3.append(3);
list3.append(8);
list3.append(9);
list3.append(7);

const k3 = 2;

const out3 = 8;

const test3: testData = {
    list: list3,
    k: k3,
    out: out3
};

tests.push(test3);

// test 4
const list4: LinkedList<number> = new LinkedList();
list4.append(5);
list4.append(4);
list4.append(3);
list4.append(5);
list4.append(3);
list4.append(8);
list4.append(9);
list4.append(7);
list4.append(5);
list4.append(4);
list4.append(5);
list4.append(5);
list4.append(2);
list4.append(7);
list4.append(8);
list4.append(3);
list4.append(8);
list4.append(8);
list4.append(9);
list4.append(4);

const k4 = 19;

const out4 = 5;

const test4: testData = {
    list: list4,
    k: k4,
    out: out4
};

tests.push(test4);

// test 5
const list5: LinkedList<number> = new LinkedList();
list5.append(6);
list5.append(6);
list5.append(666);

const k5 = 0;

const out5 = 666;

const test5: testData = {
    list: list5,
    k: k5,
    out: out5
};

tests.push(test5);

// test 6
const list6: LinkedList<number> = new LinkedList();
list6.append(6);
list6.append(6);
list6.append(666);

const k6 = -666;

const out6 = 666;

const test6: testData = {
    list: list6,
    k: k6,
    out: out6
};

tests.push(test6);

for (const testData of tests) {
    test("checking list with kthToLast", () => {
        expect(kthToLast(testData.list, testData.k)).toStrictEqual(
            testData.out
        );
    });
}
