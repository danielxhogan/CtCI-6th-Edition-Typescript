interface Data {
    value: number;
    min: number;
}

export class MinStack {
    list: Data[];

    constructor() {
        this.list = [];
    }

    push(value: number) {
        let data: Data;

        if (this.list.length === 0) {
            data = {
                value,
                min: value
            };
        } else {
            data = {
                value,
                min: Math.min(this.list[this.list.length - 1].min, value)
            };
        }

        this.list.push(data);
    }

    pop(): number | undefined {
        if (this.list.length === 0) {
            return undefined;
        } else {
            return this.list.pop().value;
        }
    }

    min(): number | undefined {
        if (this.list.length === 0) {
            return undefined;
        } else {
            return this.list[this.list.length - 1].min;
        }
    }
}
