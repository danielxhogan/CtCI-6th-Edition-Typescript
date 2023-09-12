import { listOfDepths, TreeNode } from "../../solutions/ch4/03listOfDepths";
import LinkedList from "../../utils/LinkedList";

interface TestData {
    tree: TreeNode;
    lists: LinkedList<number>[];
}

let tests: TestData[] = [];

// test 1

// TREE
// level 0
let tree1 = new TreeNode(1);

// level 1
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(2);

// level 2
tree1.left.left = new TreeNode(6);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);

// level 3
tree1.left.left.left = new TreeNode(7);
tree1.right.left.right = new TreeNode(11);

// level 4
tree1.left.left.left.right = new TreeNode(8);
tree1.right.left.right.right = new TreeNode(12);

// level 5
tree1.left.left.left.right.left = new TreeNode(10);
tree1.left.left.left.right.right = new TreeNode(9);
tree1.right.left.right.right.left = new TreeNode(15);
tree1.right.left.right.right.right = new TreeNode(13);

// level 6
tree1.right.left.right.right.right.right = new TreeNode(14);

// LISTS
let lists1: LinkedList<number>[] = [];

// level 0
lists1.push(new LinkedList<number>());
lists1[0].append(1);

// level 1
lists1.push(new LinkedList<number>());
lists1[1].append(5);
lists1[1].append(2);

// level 2
lists1.push(new LinkedList<number>());
lists1[2].append(6);
lists1[2].append(4);
lists1[2].append(3);

// level 3
lists1.push(new LinkedList<number>());
lists1[3].append(7);
lists1[3].append(11);

// level 4
lists1.push(new LinkedList<number>());
lists1[4].append(8);
lists1[4].append(12);

// level 5
lists1.push(new LinkedList<number>());
lists1[5].append(10);
lists1[5].append(9);
lists1[5].append(15);
lists1[5].append(13);

// level 6
lists1.push(new LinkedList<number>());
lists1[6].append(14);

const test1: TestData = {
    tree: tree1,
    lists: lists1
};

tests.push(test1);

for (const testData of tests) {
    test("testing listOfDepths", () => {
        expect(listOfDepths(testData.tree)).toStrictEqual(testData.lists);
    });
}
