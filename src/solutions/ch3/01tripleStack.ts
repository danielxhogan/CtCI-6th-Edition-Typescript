class Stack {
    head: number;
    tail: number;
    last: number | null;

    constructor(head: number, tail: number) {
        this.head = head;
        this.tail = tail;
        this.last = null;
    }
}

export class TripleStack {
    stacks: Stack[];
    public array: number[];

    constructor(size: number) {
        if (size < 3) {
            size = 3;
        }

        const head1 = 0;
        const head2 = Math.round(size / 3);
        const tail1 = head2 - 1;
        const head3 = Math.round((size / 3) * 2);
        const tail2 = head3 - 1;
        const tail3 = size - 1;

        this.stacks = [];
        this.stacks.push(new Stack(head1, tail1));
        this.stacks.push(new Stack(head2, tail2));
        this.stacks.push(new Stack(head3, tail3));
        this.array = new Array(size).fill(null);
    }

    push(stack: number, value: number) {
        if (stack >= 3 || stack < 0) {
            return "number must specify stack - valid input: 0, 1, 2";
        }

        if (this.stacks[stack].last === this.stacks[stack].tail) {
            this.increaseStack(stack);
        }

        if (this.stacks[stack].last === this.stacks[stack].tail) {
            return "no space left";
        }

        if (this.stacks[stack].last === null) {
            this.stacks[stack].last = this.stacks[stack].head;
        } else {
            this.stacks[stack].last =
                (this.stacks[stack].last + 1) % this.array.length;
        }

        this.array[this.stacks[stack].last] = value;
    }

    pop(stack: number) {
        if (stack >= 3 || stack < 0) {
            return "number must specify stack - valid input: 0, 1, 2";
        }

        if (this.stacks[stack].last === null) {
            return "no values in this stack";
        }

        const value = this.array[this.stacks[stack].last];
        this.array[this.stacks[stack].last] = null;

        if (this.stacks[stack].last === this.stacks[stack].head) {
            this.stacks[stack].last = null;
        } else {
            this.stacks[stack].last = this.stacks[stack].last - 1;

            if (this.stacks[stack].last < 0) {
                this.stacks[stack].last = this.array.length - 1;
            }
        }

        return value;
    }

    private increaseStack(stack: number) {
        const stack1 = stack === 2 ? 1 : stack === 1 ? 0 : 2;
        const stack2 = stack === 2 ? 0 : stack === 1 ? 2 : 1;

        let free1 = this.stacks[stack1].tail - this.stacks[stack1].last;
        let free2 = this.stacks[stack2].tail - this.stacks[stack2].last;

        if (free1 < 0) {
            free1 = free1 + this.array.length;
        }

        if (free2 < 0) {
            free2 = free2 + this.array.length;
        }

        const shift1 = Math.floor(free1 / 3);
        const shift2 = Math.floor(free2 / 3) + shift1;

        let oldLoc = (this.stacks[stack1].last + 1) % this.array.length;
        let newLoc: number;

        while (oldLoc !== this.stacks[stack1].head) {
            oldLoc--;

            if (oldLoc < 0) {
                oldLoc = this.array.length - 1;
            }

            newLoc = (oldLoc + shift1) % this.array.length;
            this.array[newLoc] = this.array[oldLoc];
            this.array[oldLoc] = null;
        }

        this.stacks[stack1].last =
            (this.stacks[stack1].last + shift1) % this.array.length;

        this.stacks[stack1].head =
            (this.stacks[stack1].head + shift1) % this.array.length;

        this.stacks[stack2].tail =
            (this.stacks[stack2].tail + shift1) % this.array.length;

        oldLoc = (this.stacks[stack2].last + 1) % this.array.length;

        while (oldLoc !== this.stacks[stack2].head) {
            oldLoc--;

            if (oldLoc < 0) {
                oldLoc = this.array.length - 1;
            }

            newLoc = (oldLoc + shift2) % this.array.length;
            this.array[newLoc] = this.array[oldLoc];
            this.array[oldLoc] = null;
        }

        this.stacks[stack2].last =
            (this.stacks[stack2].last + shift2) % this.array.length;

        this.stacks[stack2].head =
            (this.stacks[stack2].head + shift2) % this.array.length;

        this.stacks[stack].tail =
            (this.stacks[stack].tail + shift2) % this.array.length;
    }
}
