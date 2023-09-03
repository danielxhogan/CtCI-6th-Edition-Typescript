export function zeroMatrix(m: number[][]): number[][] | string {
    if (!m.length) {
        return m;
    }

    for (const row of m) {
        if (row.length !== m[0].length) {
            return "all rows must be the same length";
        }
    }

    let rowZeroHasZero = false;
    let colZeroHasZero = false;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] === 0) {
                if (i === 0) {
                    rowZeroHasZero = true;
                } else {
                    m[i][0] = 0;
                }

                if (j === 0) {
                    colZeroHasZero = true;
                } else {
                    m[0][j] = 0;
                }
            }
        }
    }

    let rowIsZeros: boolean;

    for (let i = 1; i < m.length; i++) {
        if (m[i][0] === 0) {
            rowIsZeros = true;
        } else {
            rowIsZeros = false;
        }

        for (let j = 1; j < m[i].length; j++) {
            if (rowIsZeros || m[0][j] === 0) {
                m[i][j] = 0;
            }
        }
    }

    if (rowZeroHasZero) {
        for (let i = 0; i < m[0].length; i++) {
            m[0][i] = 0;
        }
    }

    if (colZeroHasZero) {
        for (let i = 0; i < m.length; i++) {
            m[i][0] = 0;
        }
    }

    return m;
}
