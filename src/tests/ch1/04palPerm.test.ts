import { palPerm } from "../../solutions/ch1/04palPerm";

const trueInputs = [
    "hatwa wth",
    "shduue d edu udhs",
    "i ilek o to fgatst sf agoot  kel ii",
    "tisal ayw ssemoeo nouy nko wwno kou yneeooms syawals it",
    "a ba"
];

const falseInputs = [
    "atwa th",
    "shduue d u udhs",
    "i ilek o  zfgatst sf aqgoot  kel ii",
    "tisal ayw moeo ouy no no kou yneeoos syaals it"
];

for (const input of trueInputs) {
    test(`checking test input: ${input} with palPerm`, () => {
        expect(palPerm(input)).toBe(true);
    });
}

for (const input of falseInputs) {
    test(`checking test input: ${input} with palPerm`, () => {
        expect(palPerm(input)).toBe(false);
    });
}
