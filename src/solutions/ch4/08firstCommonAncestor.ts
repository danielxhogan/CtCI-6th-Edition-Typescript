export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function firstCommonAncestor(
    root: TreeNode,
    node1: TreeNode,
    node2: TreeNode
): TreeNode | null {
    const result = findFirstAncestor(root, node1, node2, 0);

    if (typeof result === "number") {
        return root;
    }

    return result;
}

function findFirstAncestor(
    root: TreeNode,
    node1: TreeNode,
    node2: TreeNode,
    count: number
): TreeNode | number {
    if (!root) {
        return count;
    }

    if (root === node1 || root === node2) {
        count++;
    }

    const leftResult = findFirstAncestor(root.left, node1, node2, count);

    if (typeof leftResult === "number") {
        if (count === 0 && leftResult === 2) {
            return root.left;
        } else {
            count = leftResult;
        }
    } else {
        return leftResult;
    }

    const rightResult = findFirstAncestor(root.right, node1, node2, count);

    if (typeof rightResult === "number") {
        if (count === 0 && rightResult === 2) {
            return root.right;
        } else {
            count = rightResult;
        }
    } else {
        return rightResult;
    }

    return count;
}
