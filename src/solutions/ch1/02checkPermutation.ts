export function checkPermutation(str1: string[], str2: string[]): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    let freqs = new Array(128).fill(0);

    for (const char of str1) {
        let idx = char.charCodeAt(0);
        freqs[idx]++;
    }

    for (const char of str2) {
        let idx = char.charCodeAt(0);
        freqs[idx]--;

        if (freqs[idx] < 0) {
            return false;
        }
    }

    return true;
}
