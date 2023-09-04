import {
    removeDups_usingSet,
    removeDups_usingDuelPtrs
} from "../../solutions/ch2/01removeDups";
import LinkedList from "../../utils/LinkedList";

let in1: LinkedList<number> = new LinkedList();
in1.append(5);
in1.append(5);

let out1: LinkedList<number> = new LinkedList();
out1.append(5);

let in2: LinkedList<number> = new LinkedList();
in2.append(4);
in2.append(5);
in2.append(5);

let out2: LinkedList<number> = new LinkedList();
out2.append(4);
out2.append(5);

let in3: LinkedList<number> = new LinkedList();
in3.append(5);
in3.append(5);
in3.append(4);

let out3: LinkedList<number> = new LinkedList();
out3.append(5);
out3.append(4);

let in4: LinkedList<number> = new LinkedList();
in4.append(5);
in4.append(5);
in4.append(4);
in4.append(6);
in4.append(7);
in4.append(2);
in4.append(1);
in4.append(4);
in4.append(6);
in4.append(5);
in4.append(7);
in4.append(1);
in4.append(2);
in4.append(5);
in4.append(6);
in4.append(3);
in4.append(9);
in4.append(5);
in4.append(4);
in4.append(4);
in4.append(2);
in4.append(1);
in4.append(8);
in4.append(6);

let out4: LinkedList<number> = new LinkedList();
out4.append(5);
out4.append(4);
out4.append(6);
out4.append(7);
out4.append(2);
out4.append(1);
out4.append(3);
out4.append(9);
out4.append(8);

let in5: LinkedList<number> = new LinkedList();
in5.append(666);
in5.append(667);
in5.append(668);

let out5: LinkedList<number> = new LinkedList();
out5.append(666);
out5.append(667);
out5.append(668);

const testPairs = [
    [null, null],
    [undefined, undefined],
    [in1, out1],
    [in2, out2],
    [in3, out3],
    [in4, out4],
    [in5, out5]
];

for (const pair of testPairs) {
    test(`checking pair with removeDups_usingSet`, () => {
        expect(removeDups_usingSet(pair[0])).toStrictEqual(pair[1]);
    });
}

for (const pair of testPairs) {
    test(`checking pair with removeDups_usingDuelPtrs`, () => {
        expect(removeDups_usingDuelPtrs(pair[0])).toStrictEqual(pair[1]);
    });
}
