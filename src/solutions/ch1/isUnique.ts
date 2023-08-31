export function isUnique_usingSet(str: string[]): boolean {
    const chars = new Set();

    if (str.length > 128) {
        return false;
    }

    for (const ch of str) {
        if (chars.has(ch)) {
            return false;
        }

        chars.add(ch);
    }

    return true;
}

export function isUnique_usingBitVec(str: string[]): boolean {
    let checker = 0;
    let val: number;

    for (let i = 0; i < str.length; i++) {
        val = str[i].charCodeAt(0) - "a".charCodeAt(0);

        if ((checker & (1 << val)) > 0) {
            return false;
        }

        checker |= 1 << val;
    }

    return true;
}

export function isUnique_usingCharacterSort(str: string): boolean {
    const sortStrArr = str.split("").sort();

    for (let i = 1; i < sortStrArr.length; i++) {
        if (sortStrArr[i] === sortStrArr[i - 1]) {
            return false;
        }
    }

    return true;
}
