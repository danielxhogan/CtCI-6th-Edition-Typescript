export function urlify(str: string[], len: number): string {
    let newTail = str.length - 1;

    for (let oldTail = len - 1; oldTail > 0; oldTail--) {
        if (str[oldTail] == " ") {
            str[newTail] = "0";
            newTail--;
            str[newTail] = "2";
            newTail--;
            str[newTail] = "%";
        } else {
            str[newTail] = str[oldTail];
        }

        newTail--;
    }

    return str.join("");
}
