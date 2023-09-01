import { checkPermutation } from "../../solutions/ch1/02checkPermutation";

const truePairs = [
    ["aaa", "aaa"],
    ["keopidskslpakd", "kksdplkeoisdap"],
    ["qtwd", "tdwq"],
    ["abcdefghi", "ihgfedcba"],
    ["1a1", "a11"],
    ["1234567812345678", "8877665544332211"],
    ["icarraci", "carcarii"],
    ["{}()[]", "[]{}()"]
];

const falsePairs = [
    ["aaa", "zzz"],
    ["dd", "ddd"],
    ["daqerttt", "a"],
    ["abcdefghiz", "ihgfedcbaa"],
    ["1a1", "11"],
    ["1122334455667788", "9911223344556677"],
    ["45678", "1239"],
    ["{}()[]", "||&&<>"],
    [" a", "a"],
    ["a", "A"]
];

for (const [str1, str2] of truePairs) {
    test(`checking stringPair: [${str1}, ${str2}] with checkPermutation`, () => {
        expect(checkPermutation(str1.split(""), str2.split(""))).toBe(true);
    });
}

for (const [str1, str2] of falsePairs) {
    test(`checking stringPair: [${str1}, ${str2}] with checkPermutation`, () => {
        expect(checkPermutation(str1.split(""), str2.split(""))).toBe(false);
    });
}
