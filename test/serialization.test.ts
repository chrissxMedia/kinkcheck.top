import { expect, test } from "vitest";
import { decodeKinkCheck, encodeKinkCheck } from "../src/base";

const exampleCheck = "0~ABkrNURTkhGqvMoAAAAAAAARIjMAAERVmaq7zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiADNEVZkAqrvMAAAAAAAAAAAAAAA";

test("re-encoding", () => {
    expect(encodeKinkCheck(decodeKinkCheck(exampleCheck))).toBe(exampleCheck);
});

test("decodeKinkCheck throws when given a too new version", () => {
    let x;
    try {
        x = decodeKinkCheck("01~");
    } catch {
        return;
    }
    throw x;
});

test("extra data is ignored", () => {
    expect(decodeKinkCheck(exampleCheck + "~otherdata")).toStrictEqual(decodeKinkCheck(exampleCheck));
});

test("extra kinks are ignored", () => {
    expect(decodeKinkCheck(exampleCheck + "ACAB")).toStrictEqual(decodeKinkCheck(exampleCheck));
});
