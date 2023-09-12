import LinkedList from "../../utils/LinkedList";

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

export function listOfDepths(root: TreeNode): LinkedList<number>[] {
    let lists: LinkedList<number>[] = [];

    makeListsDFS(root, lists, 0);

    return lists;
}

function makeListsDFS(
    root: TreeNode | null,
    lists: LinkedList<number>[],
    level: number
) {
    if (root === null) {
        return;
    }

    if (lists.length - 1 < level) {
        lists.push(new LinkedList());
    }

    lists[level].append(root.value);

    makeListsDFS(root.left, lists, level + 1);
    makeListsDFS(root.right, lists, level + 1);
}
