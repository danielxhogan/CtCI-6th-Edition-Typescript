export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    parent: TreeNode | null;

    constructor(value: number, parent: TreeNode) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
}

export function successor(node: TreeNode): TreeNode | null {
    if (node.right) {
        let current = node.right;

        while (current.left) {
            current = current.left;
        }

        return current;
    } else {
        let current = node;

        while (current.parent && current.parent.left !== current) {
            current = current.parent;
        }

        if (!current.parent) {
            return null;
        }

        return current.parent;
    }
}
