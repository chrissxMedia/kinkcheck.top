import { expect, test } from "vitest";
import { decodeKinkCheck, encodeKinkCheck, kinks } from "../src/base";

const exampleMeta = { kinks, version: "0" };
const exampleCheck = "0~ABkrNURTkhGqvMoAAAAAAAARIjMAAERVmaq7zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiADNEVZkAqrvMAAAAAAAAAAAAAAA";

test("re-encoding", () => {
    expect(encodeKinkCheck(exampleMeta, decodeKinkCheck(exampleMeta, exampleCheck))).toBe(exampleCheck);
});

test("decodeKinkCheck throws when given a too new version", () => {
    let x;
    try {
        x = decodeKinkCheck(exampleMeta, "1~");
    } catch {
        return;
    }
    throw x;
});

test("extra data is ignored", () => {
    expect(decodeKinkCheck(exampleMeta, exampleCheck + "~otherdata")).toStrictEqual(decodeKinkCheck(exampleMeta, exampleCheck));
});

test("extra kinks are ignored", () => {
    expect(decodeKinkCheck(exampleMeta, exampleCheck + "ACAB")).toStrictEqual(decodeKinkCheck(exampleMeta, exampleCheck));
});
