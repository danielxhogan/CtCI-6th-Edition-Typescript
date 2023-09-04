import { sumLists } from "../../solutions/ch2/05sumLists";
import LinkedList from "../../utils/LinkedList";

interface testData {
    list1: LinkedList<number>;
    list2: LinkedList<number>;
    out: LinkedList<number>;
}

let tests: testData[] = [];

const list11: LinkedList<number> = new LinkedList();
list11.append(9);
list11.append(7);
list11.append(8);

const list21: LinkedList<number> = new LinkedList();
list21.append(6);
list21.append(8);
list21.append(5);

const out1: LinkedList<number> = new LinkedList();
out1.append(5);
out1.append(6);
out1.append(4);
out1.append(1);

const test1: testData = {
    list1: list11,
    list2: list21,
    out: out1
};

tests.push(test1);

const list12: LinkedList<number> = new LinkedList();
list12.append(9);
list12.append(9);
list12.append(9);

const list22: LinkedList<number> = new LinkedList();
list22.append(9);
list22.append(9);
list22.append(9);

const out2: LinkedList<number> = new LinkedList();
out2.append(8);
out2.append(9);
out2.append(9);
out2.append(1);

const test2: testData = {
    list1: list12,
    list2: list22,
    out: out2
};

tests.push(test2);

const list13: LinkedList<number> = new LinkedList();
list13.append(9);
list13.append(9);
list13.append(9);

const list23: LinkedList<number> = new LinkedList();
list23.append(0);
list23.append(5);
list23.append(8);
list23.append(9);
list23.append(9);
list23.append(3);
list23.append(5);

const out3: LinkedList<number> = new LinkedList();
out3.append(9);
out3.append(4);
out3.append(8);
out3.append(0);
out3.append(0);
out3.append(4);
out3.append(5);

const test3: testData = {
    list1: list13,
    list2: list23,
    out: out3
};

tests.push(test3);

for (const testData of tests) {
    test("checking lists with sumLists", () => {
        expect(sumLists(testData.list1, testData.list2)).toStrictEqual(
            testData.out
        );
    });
}
