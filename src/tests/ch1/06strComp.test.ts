import { strComp } from "../../solutions/ch1/06strComp";

const testPairs = [
    ["aaa", "3a"],
    ["aa", "aa"],
    ["abb", "abb"],
    ["aabb", "aabb"],
    ["aaabb", "3a2b"],
    ["akdielfkdhelw", "akdielfkdhelw"],
    ["aakddieelffkddheelww", "aakddieelffkddheelww"],
    ["aakkkkkkkkddieelffkddheelww", "2a8k2d1i2e1l2f1k2d1h2e1l2w"]
];

for (const pair of testPairs) {
    test(`checking pair: ${pair} with strComp`, () => {
        expect(strComp(pair[0])).toBe(pair[1]);
    });
}
