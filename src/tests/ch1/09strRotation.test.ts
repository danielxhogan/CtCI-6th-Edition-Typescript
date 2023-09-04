import { strRotation } from "../../solutions/ch1/09strRotation";

const truePairs = [
    ["suh dude", "udesuh d"],
    ["what's your favorite scary movie", "avorite scary moviewhat's your f"]
];

const falsePairs = [
    ["suh dude", "what's up dude"],
    ["no", "yes"]
];

for (const pair of truePairs) {
    test(`checking pair: ${pair}`, () => {
        expect(strRotation(pair[0], pair[1])).toBe(true);
    });
}

for (const pair of falsePairs) {
    test(`checking pair: ${pair}`, () => {
        expect(strRotation(pair[0], pair[1])).toBe(false);
    });
}
