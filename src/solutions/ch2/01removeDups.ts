import LinkedList, { Node } from "../../utils/LinkedList";

export function removeDups_usingSet(
    list: LinkedList<number>
): LinkedList<number> {
    if (!list) {
        return list;
    }

    let seen: Set<number> = new Set();

    let ptr = list.head;
    let idx = 0;

    while (ptr !== null) {
        if (seen.has(ptr.data)) {
            list.removeAt(idx);
        } else {
            seen.add(ptr.data);
            idx++;
        }

        ptr = ptr.next;
    }

    return list;
}

export function removeDups_usingDuelPtrs(
    list: LinkedList<number>
): LinkedList<number> {
    if (!list) {
        return list;
    }

    let ptr1 = list.head;
    let ptr2: Node<number>;
    let idx = 0;

    while (ptr1 !== null) {
        ptr2 = ptr1.next;

        while (ptr2 !== null) {
            if (ptr2.data === ptr1.data) {
                list.removeAt(idx);
            } else {
                idx++;
            }

            ptr2 = ptr2.next;
        }

        ptr1 = ptr1.next;
    }

    return list;
}
