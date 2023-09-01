enum EditType {
    INSERT,
    REMOVE
}

export function oneAway(input1: string, input2: string): boolean {
    const str1 = input1.split("");
    const str2 = input2.split("");

    const len1 = str1.length;
    const len2 = str2.length;

    let editType: EditType;

    if (len2 - len1 === 1) {
        editType = EditType.INSERT;
    } else if (len1 - len2 === 1) {
        editType = EditType.REMOVE;
    } else if (len1 !== len2) {
        return false;
    }

    let idx1 = 0;
    let idx2 = 0;
    let foundDiff = false;

    for (let i = 0; i < Math.max(len1, len2); i++) {
        if (str1[idx1] !== str2[idx2]) {
            if (foundDiff) {
                return false;
            } else {
                foundDiff = true;

                // prettier-ignore
                switch (editType) {
                    case EditType.INSERT:
                        idx1--; break;
                    case EditType.REMOVE:
                        idx2--; break;
                }
            }
        }

        idx1++;
        idx2++;
    }

    return true;
}
