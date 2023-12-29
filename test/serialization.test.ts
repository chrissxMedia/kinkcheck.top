import { expect, test } from "vitest";
import { decodeKinkCheck, encodeKinkCheck, kinks } from "../src/base";

const exampleMeta = { kinks, version: "0" };
const exampleCheck = { version: "0", ratings: [[4.5, 3], [1, 2], [1.5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0], [0, 0], [0], [0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0], [0, 0], [0], [0], [0], [0], [0, 0], [0], [0], [0], [0], [0], [0], [0, 0], [0, 0], [0], [0], [0, 0], [0], [0], [0, 0], [0, 0]] };

test("re-encoding", () => {
    expect(encodeKinkCheck(exampleMeta, decodeKinkCheck(exampleMeta, JSON.stringify(exampleCheck)))).toBe(JSON.stringify(exampleCheck));
});

test("decodeKinkCheck throws when given a too new version", () => {
    let x;
    try {
        x = decodeKinkCheck(exampleMeta, JSON.stringify({ version: "1", ratings: exampleCheck.ratings }));
    } catch {
        return;
    }
    throw x;
});

test("extra data is ignored", () => {
    expect(decodeKinkCheck(exampleMeta, JSON.stringify({ extra: "data", ...exampleCheck })))
        .toStrictEqual(decodeKinkCheck(exampleMeta, JSON.stringify(exampleCheck)));
});

test("extra kinks are ignored", () => {
    expect(decodeKinkCheck(exampleMeta, JSON.stringify({ ...exampleCheck, ratings: [...exampleCheck.ratings, [0, 1]] })))
        .toStrictEqual(decodeKinkCheck(exampleMeta, JSON.stringify(exampleCheck)));
});
