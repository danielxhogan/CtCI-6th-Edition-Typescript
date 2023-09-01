import { oneAway } from "../../solutions/ch1/05oneAway";

const truePairs = [
    ["pale", "ple"],
    ["pales", "pale"],
    ["pale", "bale"],
    ["dddd", "dddd"],
    ["dddd", "ddd"],
    ["ddd", "dddd"],
    ["aderwiew", "aderwier"],
    ["adelwiew", "adelwie"],
    ["adelwie", "adelwiew"],
    ["aderwiew", "qderwiew"],
    ["derwiew", "aderwiew"],
    ["aderwiew", "derwiew"],
    ["aderwiew", "aderwiew"],
    ["aderwiew", "aderwiew"],
    ["aderwiew", "aderwiew"]
];

const falsePairs = [
    ["pale", "bake"],
    ["a", "aaa"],
    ["efdzwwszf", "efdewwsdf"],
    ["efdewwsdf", "efdzwwszf"],
    ["efdewws", "efdewwsdf"],
    ["efdewwsdf", "efdewws"],
    ["efderrsdf", "efdewwsdf"],
    ["efdewwsdf", "efderrsdf"],
    ["efdewwsdf", "rrdewwsdf"],
    ["rrdewwsdf", "efdewwsdf"],
    ["efdewwsrr", "efdewwsdf"],
    ["efdewwsdf", "efdewwsrr"]
];

for (const pair of truePairs) {
    test(`checking pair: ${pair} with oneAway`, () => {
        expect(oneAway(pair[0], pair[1])).toBe(true);
    });
}

for (const pair of falsePairs) {
    test(`checking pair: ${pair} with oneAway`, () => {
        expect(oneAway(pair[0], pair[1])).toBe(false);
    });
}
