import { successor, TreeNode } from "../../solutions/ch4/06successor";

interface TestData {
    node: TreeNode;
    next: TreeNode;
}

let tests: TestData[] = [];

// level 0
let tree = new TreeNode(47, null);

// level 1
tree.left = new TreeNode(13, tree);
tree.right = new TreeNode(101, tree);

// level 2
tree.left.left = new TreeNode(6, tree.left);
tree.left.right = new TreeNode(21, tree.left);
tree.right.left = new TreeNode(72, tree.right);
tree.right.right = new TreeNode(121, tree.right);

// level 3
tree.left.right.left = new TreeNode(17, tree.left.right);
tree.right.left.left = new TreeNode(64, tree.right.left);
tree.right.left.right = new TreeNode(83, tree.right.left);
tree.right.right.right = new TreeNode(131, tree.right.right);

// level 4
tree.right.right.right.left = new TreeNode(125, tree.right.right.right);

// level 5
// prettier-ignore
tree.right.right.right.left.left = new TreeNode( 124, tree.right.right.right.left);
// prettier-ignore
tree.right.right.right.left.right = new TreeNode( 126, tree.right.right.right.left);

// level 6
// prettier-ignore
tree.right.right.right.left.right.right = new TreeNode( 129, tree.right.right.right.left.right);

// test 1
const test1: TestData = {
    node: tree, // 47
    next: tree.right.left.left // 64
};

tests.push(test1);

// test 2
const test2: TestData = {
    node: tree.right.right.right.left.right.right, // 129
    next: tree.right.right.right // 131
};

tests.push(test2);

// test 3
const test3: TestData = {
    node: tree.right.left.left, // 64
    next: tree.right.left // 72
};

tests.push(test3);

// test 4
const test4: TestData = {
    node: tree.right.left, // 72
    next: tree.right.left.right // 83
};

tests.push(test4);

// test 5
const test5: TestData = {
    node: tree.right.right, // 121
    next: tree.right.right.right.left.left // 124
};

tests.push(test5);

// test 6
const test6: TestData = {
    node: tree.right.right.right, // 131
    next: null
};

tests.push(test6);

for (const testData of tests) {
    test("testing successor", () => {
        expect(successor(testData.node)).toBe(testData.next);
    });
}
