import {
    isUnique_usingSet,
    isUnique_usingBitVec,
    isUnique_usingCharacterSort
} from "../../solutions/ch1/isUnique";

const trueStrings = [
    "abcdefghi",
    "jklpoiuqwerzxcvmnsadf",
    "1234567890",
    "abcdefg1234567890(*)"
];

const falseStrings = [
    "abcadef",
    "aaaaaaaaaa",
    "abcdefghijklmnopqrstuvwxyza",
    "1234567890asdklf1",
    "!@#$%^&*()(*#($&#(*$&#*($&#()))))"
];

for (const string of trueStrings) {
    test(`checking string: ${string} with isUnique_usingSet`, () => {
        expect(isUnique_usingSet(string.split(""))).toBe(true);
    });
}

for (const string of falseStrings) {
    test(`checking string: ${string} with isUnique_usingSet`, () => {
        expect(isUnique_usingSet(string.split(""))).toBe(false);
    });
}

for (const string of trueStrings) {
    test(`checking string: ${string} with isUnique_usingBitVec`, () => {
        expect(isUnique_usingBitVec(string.split(""))).toBe(true);
    });
}

for (const string of falseStrings) {
    test(`checking string: ${string} with isUnique_usingBitVec`, () => {
        expect(isUnique_usingBitVec(string.split(""))).toBe(false);
    });
}

for (const string of trueStrings) {
    test(`checking string: ${string} with isUnique_usingCharacterSort`, () => {
        expect(isUnique_usingCharacterSort(string)).toBe(true);
    });
}

for (const string of falseStrings) {
    test(`checking string: ${string} with isUnique_usingCharacterSort`, () => {
        expect(isUnique_usingCharacterSort(string)).toBe(false);
    });
}
