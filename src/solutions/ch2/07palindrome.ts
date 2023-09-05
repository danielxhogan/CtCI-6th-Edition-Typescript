import LinkedList, { Node } from "../../utils/LinkedList";

export function palindrome(
    list1: LinkedList<number>,
    list2: LinkedList<number>
): Node<number> | null {
    let ptr1 = list1.head;
    let ptr2 = list2.head;

    if (list1.length > list2.length) {
        const diff = list1.length - list2.length;

        for (let i = 0; i < diff; i++) {
            ptr1 = ptr1.next;
        }
    }

    if (list2.length > list1.length) {
        const diff = list2.length - list1.length;

        for (let i = 0; i < diff; i++) {
            ptr2 = ptr2.next;
        }
    }

    while (ptr1 !== null) {
        if (ptr1 === ptr2) {
            return ptr1;
        }

        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return null;
}
