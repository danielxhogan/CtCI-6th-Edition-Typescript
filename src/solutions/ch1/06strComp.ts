export function strComp(input: string): string {
    let str = input.split("");
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            count++;
        }
    }

    if (count * 2 >= str.length) {
        return str.join("");
    }

    let compStr: string[] = [];
    count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;

        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            compStr.push(count.toString());
            compStr.push(str[i]);
            count = 0;
        }
    }

    return compStr.join("");
}
