export class TreeNode {
    root: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.root = value;
        this.left = null;
        this.right = null;
    }
}

export function minTree(array: number[]): TreeNode {
    if (array.length === 0) {
        return null;
    }

    if (array.length === 1) {
        return new TreeNode(array[0]);
    }

    const mid = Math.floor(array.length / 2);
    const root = new TreeNode(array[mid]);
    root.left = minTree(array.slice(0, mid));
    root.right = minTree(array.slice(mid + 1, array.length));

    return root;
}
