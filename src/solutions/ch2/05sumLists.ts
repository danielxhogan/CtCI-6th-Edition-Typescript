import LinkedList from "../../utils/LinkedList";

export function sumLists(
    list1: LinkedList<number>,
    list2: LinkedList<number>
): LinkedList<number> {
    let ptr1 = list1.head;
    let ptr2 = list2.head;
    let ptr3 = list2.head;

    while (list1.length < list2.length) {
        list1.append(0);
    }

    while (list2.length < list1.length) {
        list2.append(0);
    }

    let sum: number;

    while (ptr1 !== null) {
        sum = ptr1.data + ptr2.data;
        ptr3.data = sum % 10;

        while (sum > 9) {
            if (ptr3.next === null) {
                list2.append(0);
            }
            ptr3 = ptr3.next;
            sum = 1 + ptr3.data;
            ptr3.data = sum % 10;
        }

        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
        ptr3 = ptr2;
    }

    return list2;
}
