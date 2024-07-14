import { expect, test } from "vitest";
import { decodeKinkCheck, encodeKinkCheck, type kinklist } from "../src/base";

const exampleMeta1 = {
    kinks: {
        "Category 1": [
            ["Kink A", ["top", "bottom"], 0],
            ["Kink B", ["dom", "sub"], 1],
        ],
        "Category 2": [
            ["Kink C", [""], 2],
        ],
     } as kinklist,
};

const exampleMeta2 = {
    kinks: {
        "Category 1": [
            ["Kink B", ["give", "receive"], 1],
        ],
        "Category 2": [
            ["Kink C", [""], 2],
        ],
        "Category 3": [
            ["Kink A'", ["top", "bottom"], 0],
        ],
    } as kinklist,
};

const exampleCheck = { ratings: [[1, 2], [3, 4], [1.5]] };

test("re-encoding", () => {
    expect(encodeKinkCheck(exampleMeta1, decodeKinkCheck(exampleMeta1, JSON.stringify(exampleCheck)))).toBe(JSON.stringify(exampleCheck));
});

test("extra data is ignored", () => {
    expect(decodeKinkCheck(exampleMeta1, JSON.stringify({ extra: "data", ...exampleCheck })))
        .toStrictEqual(decodeKinkCheck(exampleMeta1, JSON.stringify(exampleCheck)));
});

test("extra kinks are ignored", () => {
    expect(decodeKinkCheck(exampleMeta1, JSON.stringify({ ...exampleCheck, ratings: [...exampleCheck.ratings, [0, 1]] })))
        .toStrictEqual(decodeKinkCheck(exampleMeta1, JSON.stringify(exampleCheck)));
});

test("moving kinks around and slightly adjusting them results in the same encoding", () => {
    expect(JSON.stringify(exampleCheck)).toStrictEqual(encodeKinkCheck(exampleMeta2, decodeKinkCheck(exampleMeta2, JSON.stringify(exampleCheck))));
});
