import { BSTSequences } from "../../solutions/ch4/09BSTSequences";
import { TreeNode } from "../../utils/TreeNode";

interface TestData {
    root: TreeNode;
    paths: number[][];
}

let tests: TestData[] = [];

// test 1
let tree1 = new TreeNode(2);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(3);

const paths1 = [
    [2, 1, 3],
    [2, 3, 1]
];

const test1: TestData = {
    root: tree1,
    paths: paths1
};

tests.push(test1);

// test 2
let tree2 = new TreeNode(45);
tree2.left = new TreeNode(12);
tree2.right = new TreeNode(50);

tree2.left.right = new TreeNode(32);
tree2.right.right = new TreeNode(55);

const paths2 = [
    [45, 12, 50, 32, 55],
    [45, 12, 50, 55, 32],
    [45, 12, 32, 50, 55],
    [45, 50, 12, 55, 32],
    [45, 50, 12, 32, 55],
    [45, 50, 55, 12, 32]
];

const test2: TestData = {
    root: tree2,
    paths: paths2
};

tests.push(test2);

for (const testData of tests) {
    test("testing BSTSequence", () => {
        expect(BSTSequences(testData.root)).toStrictEqual(testData.paths);
    });
}
