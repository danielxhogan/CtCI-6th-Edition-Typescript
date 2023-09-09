import { minTree, TreeNode } from "../../solutions/ch4/02minTree";

interface TestData {
    in: number[];
    out: TreeNode;
}

let tests: TestData[] = [];

// test 1
const array1 = [2, 51, 76, 127, 368, 389, 420, 521, 787];

const tree1 = new TreeNode(368);

tree1.left = new TreeNode(76);

tree1.left.left = new TreeNode(51);
tree1.left.right = new TreeNode(127);

tree1.left.left.left = new TreeNode(2);

tree1.right = new TreeNode(521);

tree1.right.left = new TreeNode(420);
tree1.right.right = new TreeNode(787);

tree1.right.left.left = new TreeNode(389);

const test1: TestData = {
    in: array1,
    out: tree1
};

tests.push(test1);

// test 2
const array2 = [2, 51, 76, 127, 368, 389, 420, 521, 787, 999];

const tree2 = new TreeNode(389);

tree2.left = new TreeNode(76);

tree2.left.left = new TreeNode(51);
tree2.left.right = new TreeNode(368);

tree2.left.left.left = new TreeNode(2);
tree2.left.right.left = new TreeNode(127);

tree2.right = new TreeNode(787);

tree2.right.left = new TreeNode(521);
tree2.right.right = new TreeNode(999);

tree2.right.left.left = new TreeNode(420);

const test2: TestData = {
    in: array2,
    out: tree2
};

tests.push(test2);

for (const testData of tests) {
    test("testing minTree", () => {
        expect(minTree(testData.in)).toStrictEqual(testData.out);
    });
}
