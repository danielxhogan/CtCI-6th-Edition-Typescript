import { intersection } from "../../solutions/ch2/07intersection";
import LinkedList, { Node } from "../../utils/LinkedList";

interface TestData {
    list1: LinkedList<number>;
    list2: LinkedList<number>;
    out: Node<number> | null;
}

let tests: TestData[] = [];

// test 1
let list11: LinkedList<number> = new LinkedList();
list11.append(5);
list11.append(3);
list11.append(2);
list11.append(5);

let list21: LinkedList<number> = new LinkedList();
list21.append(5);
list21.append(3);
list21.append(2);

list21.tail.next = list11.head;
list21.length += list11.length;

const out1 = list11.head;

const test1: TestData = {
    list1: list11,
    list2: list21,
    out: out1
};

tests.push(test1);

// test 2
let list12: LinkedList<number> = new LinkedList();
list12.append(5);
list12.append(43);
list12.append(62);
list12.append(567);
list12.append(654);
list12.append(56);
list12.append(329);
list12.append(28);
list12.append(42);
list12.append(91);
list12.append(56);
list12.append(74);
list12.append(33);
list12.append(25);
list12.append(19);
list12.append(2);

let list22: LinkedList<number> = new LinkedList();
list22.append(5);
list22.append(32);
list22.append(84);
list22.append(11);
list22.append(25);
list22.append(31);
list22.append(77);

const INTERSECT_IDX_2 = 6;
let ptr2 = list12.head;

for (let i = 0; i < INTERSECT_IDX_2; i++) {
    ptr2 = ptr2.next;
}

list22.tail.next = ptr2;
list22.length += list12.length - INTERSECT_IDX_2;

const out2 = ptr2;

const test2: TestData = {
    list1: list12,
    list2: list22,
    out: out2
};

tests.push(test2);

// test 3
let list13: LinkedList<number> = new LinkedList();
list13.append(15);
list13.append(55);
list13.append(56);
list13.append(56);

let list23: LinkedList<number> = new LinkedList();
list23.append(56);
list23.append(5);
list23.append(636);
list23.append(26);
list23.append(25);
list23.append(56);
list23.append(73);

const out3 = null;

const test3: TestData = {
    list1: list13,
    list2: list23,
    out: out3
};

tests.push(test3);

for (const testData of tests) {
    test("checking test data with palindrome", () => {
        expect(intersection(testData.list1, testData.list2)).toBe(testData.out);
    });
}
