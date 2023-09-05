import LinkedList, { Node } from "../../utils/LinkedList";

export function loopDetect(
    list: LinkedList<number>
): Node<number> | null | number {
    let ptr1 = list.head.next;
    let ptr2 = list.head.next.next;
    let foundLoop = false;

    while (ptr2 !== null && ptr2.next !== null) {
        if (ptr2 === ptr1) {
            foundLoop = true;
            break;
        }

        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }

    if (foundLoop) {
        let loopSize = 0;

        do {
            ptr1 = ptr1.next;
            loopSize++;
        } while (ptr1 !== ptr2);

        ptr1 = list.head;

        while (true) {
            ptr2 = ptr1;

            for (let i = 0; i < loopSize; i++) {
                ptr2 = ptr2.next;
            }

            if (ptr2.data === ptr1.data) {
                return ptr2;
            }

            ptr1 = ptr1.next;
        }
    }

    return null;
}
