export function strRotation(str1: string, str2: string): boolean {
    const testStr = str2 + str2;
    if (testStr.includes(str1)) {
        return true;
    }

    return false;
}
