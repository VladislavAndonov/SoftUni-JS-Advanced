import { expect } from "chai";
import { isOddOrEven } from "./02-evenOrOdd.js";

describe("Suite", function () {
  it("Returning undefined", function () {
    expect(isOddOrEven(1)).to.equal(undefined);
    expect(isOddOrEven([1, 2, 3])).to.equal(undefined);
    expect(isOddOrEven(true)).to.equal(undefined);
    expect(isOddOrEven({ key: "value" })).to.equal(undefined);
  });
  it("Returning even", () => {
    expect(isOddOrEven("aa")).to.equal("even");
    expect(isOddOrEven("aabb")).to.equal("even");
    expect(isOddOrEven("abcdef")).to.equal("even");
  });
  it("Returning odd", () => {
    expect(isOddOrEven("a")).to.equal("odd");
    expect(isOddOrEven("abc")).to.equal("odd");
    expect(isOddOrEven("aaaaa")).to.equal("odd");
  });
});
