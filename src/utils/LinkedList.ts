export class Node<T> {
    data: T;
    next: Node<T> | null;
    previous: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

export default class LinkedList<T> {
    public length: number;
    public head: Node<T> | null;
    public tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = this.tail = null;
    }

    prepend(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = this.tail = node;
        } else if (idx <= 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < idx; i++) {
                if (currentNode.next) {
                    currentNode = currentNode.next;
                } else {
                    break;
                }
            }

            if (currentNode === this.tail) {
                this.tail = node;
            }

            node.previous = currentNode.previous;
            node.next = currentNode;

            if (currentNode.previous) {
                currentNode.previous.next = node;
            }
            currentNode.previous = node;
        }

        this.length++;
    }

    append(item: T): void {
        const node = new Node(item);
        this.tail = node;

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            node.previous = currentNode;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            let currentNode = this.head;

            while (currentNode.data !== item) {
                if (!currentNode.next) {
                    return undefined;
                } else {
                    currentNode = currentNode.next;
                }
            }

            if (currentNode === this.head) {
                this.head = currentNode.next;
            } else if (currentNode === this.tail) {
                this.tail = this.tail.previous;

                if (this.tail) {
                    this.tail.next = null;
                }
            } else if (currentNode.previous && currentNode.next) {
                currentNode.previous.next = currentNode.next;
                currentNode.next.previous = currentNode.previous;
            }

            this.length--;
            return item;
        }
    }

    get(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < idx; i++) {
                if (currentNode.next) {
                    currentNode = currentNode.next;
                } else {
                    return undefined;
                }
            }

            return currentNode.data;
        }
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < idx; i++) {
                if (currentNode.next) {
                    currentNode = currentNode.next;
                } else {
                    return undefined;
                }
            }

            const val = currentNode.data;

            if (currentNode === this.head) {
                this.head = this.head.next;
                if (this.head) {
                    this.head.previous = null;
                }
            } else if (currentNode === this.tail) {
                this.tail = this.tail.previous;
                if (this.tail) {
                    this.tail.next = null;
                }
            } else if (currentNode.previous && currentNode.next) {
                currentNode.previous.next = currentNode.next;
                currentNode.next.previous = currentNode.previous;
            }

            this.length--;
            return val;
        }
    }
}
