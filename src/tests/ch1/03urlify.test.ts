import { urlify } from "../../solutions/ch1/03urlify";

interface UrlifyTestValue {
    str1: string;
    str2: string;
    len: number;
}

const truePairs: UrlifyTestValue[] = [
    {
        str1: "suh dude  ",
        str2: "suh%20dude",
        len: 8
    },
    {
        str1: "what a lovely day      ",
        str2: "what%20a%20lovely%20day",
        len: 17
    },
    {
        str1: "get-to-the-choppa",
        str2: "get-to-the-choppa",
        len: 17
    },
    {
        str1: "arnold says get-to-the-choppa right fucking now do it              ",
        str2: "arnold%20says%20get-to-the-choppa%20right%20fucking%20now%20do%20it",
        len: 53
    }
];

for (const val of truePairs) {
    test(`checking test val: ${val.str1} with urlify`, () => {
        expect(urlify(val.str1.split(""), val.len)).toBe(val.str2);
    });
}
