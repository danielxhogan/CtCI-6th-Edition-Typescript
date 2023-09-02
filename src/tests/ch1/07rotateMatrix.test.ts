import { rotateMatrix } from "../../solutions/ch1/07rotateMatrix";

// prettier-ignore
const testPairs = [
    // pair 1
    [
        [],
        []
    ],
    // pair 2
    [
        [
            [4]
        ],
        [
            [4]
        ]
    ],
    // pair 3
    [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [3, 1],
            [4, 2]
        ]
    ],
    // pair 4
    [
        [
            [45, 66, 58],
            [13, 25, 46],
            [86, 45, 89]
        ],
        [
            [86, 13, 45],
            [45, 25, 66],
            [89, 46, 58]
        ]
    ],
    // pair 5
    [
        [
            [457, 587, 423, 412],
            [658, 871, 658, 632],
            [487, 413, 586, 324],
            [957, 873, 575, 627]
        ],
        [
            [957, 487, 658, 457],
            [873, 413, 871, 587],
            [575, 586, 658, 423],
            [627, 324, 632, 412]
        ]
    ],
    // pair 6
    [
        [
            [1],
            [1]
        ],
        "matrix must have matching number of columns and rows"
    ],
    // pair 7
    [
        [
            [1, 1]
        ],
        "matrix must have matching number of columns and rows"
    ],
    // pair 8
    [
        [
            [1, 1, 546]
        ],
        "matrix must have matching number of columns and rows"
    ],
    // pair 9
    [
        [
            [1, 1, 546],
            [56, 45]
        ],
        "matrix must have matching number of columns and rows"
    ],
    // pair 10
    [
        [
            [1, 546],
            [56, 45],
            [58, 242]
        ],
        "matrix must have matching number of columns and rows"
    ],
    // pair 11
    [
        [
            [1, 546, 6],
            [56, 45, 45],
            [58, 242]
        ],
        "matrix must have matching number of columns and rows"
    ]
];

for (const pair of testPairs) {
    test(`check pair: ${pair} with rotateMatrix`, () => {
        if (Array.isArray(pair[0])) {
            expect(rotateMatrix(pair[0])).toStrictEqual(pair[1]);
        }
    });
}
