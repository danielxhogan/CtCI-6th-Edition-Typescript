export function rotateMatrix(m: number[][]): number[][] | string {
    if (!m.length) {
        return m;
    }

    for (const row of m) {
        if (row.length !== m.length) {
            return "matrix must have matching number of columns and rows";
        }
    }

    const n = m.length - 1;
    const layers = Math.floor(m.length / 2);
    let temp: number;

    for (let i = 0; i < layers; i++) {
        for (let j = i; j < n - i; j++) {
            // location1 = m[i][j];
            // location2 = m[j][n - i];
            // location3 = m[n - i][n - j];
            // location4 = m[n - j][i];

            // store location1's value in temp
            temp = m[i][j];

            // put location4's value in location1
            m[i][j] = m[n - j][i];

            // put location3's value in location4
            m[n - j][i] = m[n - i][n - j];

            // put location2's value in location3
            m[n - i][n - j] = m[j][n - i];

            // put location1's value in location2
            m[j][n - i] = temp;
        }
    }

    return m;
}
