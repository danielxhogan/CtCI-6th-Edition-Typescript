import { buildOrder, GraphNode } from "../../solutions/ch4/07buildOrder";

interface TestData {
    in: GraphNode[];
    out: GraphNode[];
}

let tests: TestData[] = [];

// test 1
let graph1A = new GraphNode("A");
let graph1B = new GraphNode("B");
let graph1C = new GraphNode("C");
let graph1F = new GraphNode("F");
let graph1H = new GraphNode("H");

graph1A.dependants.push(graph1F);
graph1F.dependancies++;
graph1A.dependants.push(graph1C);
graph1C.dependancies++;

graph1F.dependants.push(graph1H);
graph1H.dependancies++;
graph1F.dependants.push(graph1C);
graph1C.dependancies++;

graph1C.dependants.push(graph1H);
graph1H.dependancies++;
graph1C.dependants.push(graph1B);
graph1B.dependancies++;

graph1B.dependants.push(graph1H);
graph1H.dependancies++;

let in1: GraphNode[] = [];
in1.push(graph1A);
in1.push(graph1B);
in1.push(graph1C);
in1.push(graph1F);
in1.push(graph1H);

let out1: GraphNode[] = [];
out1.push(graph1A);
out1.push(graph1F);
out1.push(graph1C);
out1.push(graph1B);
out1.push(graph1H);

const test1: TestData = {
    in: in1,
    out: out1
};

tests.push(test1);

// test 2
let graph2A = new GraphNode("A");
let graph2B = new GraphNode("B");
let graph2C = new GraphNode("C");
let graph2F = new GraphNode("F");
let graph2G = new GraphNode("G");
let graph2H = new GraphNode("H");

graph2A.dependants.push(graph2B);
graph2B.dependancies++;
graph2A.dependants.push(graph2C);
graph2C.dependancies++;

graph2F.dependants.push(graph2B);
graph2B.dependancies++;

graph2B.dependants.push(graph2C);
graph2C.dependancies++;

graph2G.dependants.push(graph2A);
graph2A.dependancies++;

graph2H.dependants.push(graph2C);
graph2C.dependancies++;

let in2: GraphNode[] = [];
in2.push(graph2A);
in2.push(graph2B);
in2.push(graph2C);
in2.push(graph2F);
in2.push(graph2G);
in2.push(graph2H);

let out2: GraphNode[] = [];
out2.push(graph2F);
out2.push(graph2G);
out2.push(graph2A);
out2.push(graph2B);
out2.push(graph2H);
out2.push(graph2C);

const test2: TestData = {
    in: in2,
    out: out2
};

tests.push(test2);

// test 3
let graph3A = new GraphNode("A");
let graph3B = new GraphNode("B");
let graph3C = new GraphNode("C");
let graph3D = new GraphNode("D");
let graph3E = new GraphNode("E");
let graph3F = new GraphNode("F");
let graph3G = new GraphNode("G");

graph3F.dependants.push(graph3C);
graph3C.dependancies++;
graph3F.dependants.push(graph3A);
graph3A.dependancies++;
graph3F.dependants.push(graph3B);
graph3B.dependancies++;

graph3C.dependants.push(graph3A);
graph3A.dependancies++;

graph3A.dependants.push(graph3E);
graph3E.dependancies++;

graph3B.dependants.push(graph3A);
graph3A.dependancies++;
graph3B.dependants.push(graph3E);
graph3E.dependancies++;

graph3D.dependants.push(graph3G);
graph3G.dependancies++;

let in3: GraphNode[] = [];
in3.push(graph3A);
in3.push(graph3B);
in3.push(graph3C);
in3.push(graph3D);
in3.push(graph3E);
in3.push(graph3F);
in3.push(graph3G);

let out3: GraphNode[] = [];
out3.push(graph3D);
out3.push(graph3G);
out3.push(graph3F);
out3.push(graph3C);
out3.push(graph3B);
out3.push(graph3A);
out3.push(graph3E);

const test3: TestData = {
    in: in3,
    out: out3
};

tests.push(test3);

for (const testData of tests) {
    test("testing buildOrder", () => {
        expect(buildOrder(testData.in)).toStrictEqual(testData.out);
    });
}
