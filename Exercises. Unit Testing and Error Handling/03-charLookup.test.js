import { expect } from "chai";
import { lookupChar } from "./03-charLookup.js";

describe("Lookup for a char", () => {
  it("should return undefined for non-string frist param", () => {
    expect(lookupChar(123, 1)).to.equal(undefined);
    expect(lookupChar(["a", "b", "c"], 1)).to.equal(undefined);
    expect(lookupChar(true, 1)).to.equal(undefined);
    expect(lookupChar({ key: "value" }, 1)).to.equal(undefined);
  });
  it("should return undefined for non-number second param", () => {
    expect(lookupChar("asd", "a")).to.equal(undefined);
    expect(lookupChar("asd", true)).to.equal(undefined);
    expect(lookupChar("asd", 3.14)).to.equal(undefined);
    expect(lookupChar("asd", { key: "value" })).to.equal(undefined);
  });

  it("should return 'Incorrect index' for index bigger thatn the string length", () => {
    expect(lookupChar("aaa", 7)).to.equal("Incorrect index");
    expect(lookupChar("aabbcc", 11)).to.equal("Incorrect index");
  });
  it("should return 'Incorrect index' for index equal to the string length", () => {
    expect(lookupChar("aaa", 3)).to.equal("Incorrect index");
    expect(lookupChar("aabbcc", 6)).to.equal("Incorrect index");
  });
  it("should return 'Incorrect index' for negative index", () => {
    expect(lookupChar("aaa", -3)).to.equal("Incorrect index");
    expect(lookupChar("aabbcc", -1)).to.equal("Incorrect index");
  });

  it("should work correctly if both parameters have correct types and values", () => {
    expect(lookupChar("abc", 1)).to.equal("b");
    expect(lookupChar("string", 4)).to.equal("n");
    expect(lookupChar("working", 2)).to.equal("r");
    expect(lookupChar("success", 0)).to.equal("s");
  });
});
