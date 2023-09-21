import { TreeNode } from "../../utils/TreeNode";

export function BSTSequences(root: TreeNode): number[][] {
    let path: number[] = [];
    let paths: number[][] = [];
    let candidates: TreeNode[] = [];

    findSequences(root, path, paths, candidates);

    return paths;
}

function findSequences(
    node: TreeNode,
    path: number[],
    paths: number[][],
    candidates: TreeNode[]
) {
    path.push(node.value);

    if (node.left) {
        candidates.push(node.left);
    }

    if (node.right) {
        candidates.push(node.right);
    }

    if (candidates.length === 0) {
        paths.push([...path]);
    } else {
        for (const nextNode of candidates) {
            findSequences(
                nextNode,
                path,
                paths,
                candidates.filter(candidate => candidate !== nextNode)
            );
        }
    }

    path.pop();
}
