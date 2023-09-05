import { loopDetect } from "../../solutions/ch2/08loopDetect";
import LinkedList, { Node } from "../../utils/LinkedList";

interface TestData {
    list: LinkedList<number>;
    out: Node<number> | null;
}

let tests: TestData[] = [];

// test 1
let list1: LinkedList<number> = new LinkedList();
list1.append(5);
list1.append(65);
list1.append(46);
list1.append(23);

list1.append(47);

list1.append(12);
list1.append(98);
list1.append(57);
list1.append(22);

let ptr = list1.head;

for (let i = 0; i < 4; i++) {
    ptr = ptr.next;
}

list1.tail.next = ptr;

const test1: TestData = {
    list: list1,
    out: ptr
};

tests.push(test1);

// test 2
let list2: LinkedList<number> = new LinkedList();
list2.append(5);
list2.head.next = list2.head;

const test2: TestData = {
    list: list2,
    out: list2.head
};

tests.push(test2);

// test 3
let list3: LinkedList<number> = new LinkedList();
list3.append(5);
list3.append(65);
list3.append(46);
list3.append(23);
list3.append(47);
list3.append(12);
list3.append(98);
list3.append(57);
list3.append(22);

const test3: TestData = {
    list: list3,
    out: null
};

tests.push(test3);

// test 4
let list4: LinkedList<number> = new LinkedList();
list4.append(5);
list4.append(65);
list4.append(46);
list4.append(23);

ptr = list4.head;

for (let i = 0; i < 3; i++) {
    ptr = ptr.next;
}

list4.tail.next = ptr;

const test4: TestData = {
    list: list4,
    out: ptr
};

tests.push(test4);

for (const testData of tests) {
    test("testing loopDetect", () => {
        expect(loopDetect(testData.list)).toBe(testData.out);
    });
}
