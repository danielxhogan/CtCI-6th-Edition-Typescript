export class SetOfStacks {
    public stackSet: number[][];
    size: number;
    length: number;

    constructor(size: number) {
        this.stackSet = [];
        this.size = size;
        this.length = 0;
    }

    push(value: number) {
        if (this.stackSet.length === 0) {
            this.stackSet.push(new Array());
        }

        let lastArray = this.stackSet[this.stackSet.length - 1];

        if (lastArray.length === this.size) {
            this.stackSet.push(new Array());
            lastArray = this.stackSet[this.stackSet.length - 1];
        }

        lastArray.push(value);
        this.length++;
    }

    pop(): number | null {
        if (this.stackSet.length === 0) {
            this.length--;
            return null;
        }

        const lastArray = this.stackSet[this.stackSet.length - 1];
        const value = lastArray.pop();

        if (lastArray.length === 0) {
            this.stackSet.pop();
        }

        this.length--;
        return value;
    }

    popAt(idx: number): number {
        if (this.stackSet.length === 0) {
            return null;
        }

        const arrayIdx = Math.floor(idx / this.size);

        if (arrayIdx > this.stackSet.length - 1) {
            return null;
        }

        const localIdx = idx - arrayIdx * this.size;

        if (localIdx > this.stackSet[arrayIdx].length - 1) {
            return null;
        }

        const value = this.stackSet[arrayIdx][localIdx];

        let newLoc = localIdx;
        let oldLoc = newLoc + 1;
        let currentArray = arrayIdx;

        while (idx < this.length - 1) {
            if (oldLoc >= this.stackSet[currentArray].length) {
                oldLoc = 0;

                this.stackSet[currentArray][newLoc] =
                    this.stackSet[currentArray + 1][oldLoc];

                currentArray++;
                oldLoc++;
                newLoc = 0;
            } else {
                this.stackSet[currentArray][newLoc] =
                    this.stackSet[currentArray][oldLoc];

                oldLoc++;
                newLoc++;
            }

            idx++;
        }

        this.stackSet[currentArray].pop();

        if (this.stackSet[currentArray].length === 0) {
            this.stackSet.pop();
        }

        this.length--;
        return value;
    }
}
