export function palPerm(input: string): boolean {
    const str = input.replace(" ", "").split("");
    const isOdd = str.length & 1;
    let freqs: number[] = new Array(26).fill(0);

    for (const char of str) {
        const idx = char.charCodeAt(0) - "a".charCodeAt(0);
        freqs[idx]++;
    }

    let foundOdd = false;

    for (const freq of freqs) {
        if (freq & 1) {
            if (isOdd) {
                if (foundOdd) {
                    return false;
                } else {
                    foundOdd = true;
                }
            } else {
                return false;
            }
        }
    }

    return true;
}
