import {
    firstCommonAncestor,
    TreeNode
} from "../../solutions/ch4/08firstCommonAncestor";

interface TestData {
    root: TreeNode;
    node1: TreeNode;
    node2: TreeNode;
    ancestor: TreeNode | null;
}

let tests: TestData[] = [];

// TREE
// level 0
let tree = new TreeNode(3);

// level 1
tree.left = new TreeNode(14);
tree.right = new TreeNode(27);

// level 2
tree.left.left = new TreeNode(30);
tree.right.left = new TreeNode(22);
tree.right.right = new TreeNode(37);

// level 3
tree.left.left.left = new TreeNode(71);
tree.left.left.right = new TreeNode(14);
tree.right.left.left = new TreeNode(28);
tree.right.left.right = new TreeNode(76);

// level 4
tree.left.left.left.right = new TreeNode(26);
tree.right.left.left.right = new TreeNode(67);
tree.right.left.right.left = new TreeNode(81);
tree.right.left.right.right = new TreeNode(42);

// level 5
tree.right.left.left.right.left = new TreeNode(41);
tree.right.left.left.right.right = new TreeNode(52);

// test 1
const test1: TestData = {
    root: tree,
    node1: tree.right.left.left.right.left,
    node2: tree.right.left.right.right,
    ancestor: tree.right.left
};

tests.push(test1);

// test 2
const test2: TestData = {
    root: tree,
    node1: tree.left.left.left,
    node2: tree.left.left.left.right,
    ancestor: tree.left.left.left
};

tests.push(test2);

// test 3
const test3: TestData = {
    root: tree,
    node1: tree.left.left.left,
    node2: tree.right,
    ancestor: tree
};

tests.push(test3);

// test 4
const test4: TestData = {
    root: tree,
    node1: tree.right.left.left.right.left,
    node2: tree.right.right,
    ancestor: tree.right
};

tests.push(test4);

for (const testData of tests) {
    test("testing firstCommonAncestor", () => {
        expect(
            firstCommonAncestor(testData.root, testData.node1, testData.node2)
        ).toBe(testData.ancestor);
    });
}
