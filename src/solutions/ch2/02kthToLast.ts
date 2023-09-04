import LinkedList, { Node } from "../../utils/LinkedList";

export function kthToLast(list: LinkedList<number>, k: number): number {
    let ptr1 = list.head;
    let ptr2 = list.head;

    for (let i = 0; i < k; i++) {
        ptr2 = ptr2.next;

        if (!ptr2) {
            return null;
        }
    }

    while (ptr2 !== list.tail) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1.data;
}
