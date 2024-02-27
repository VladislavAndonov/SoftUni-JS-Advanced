import { expect } from "chai";
import { sum } from "./04-sumOfNumbers.js";

describe("Suite", () => {
  it("works with array of numbers", () => {
    const arr = [1, 1, 1];

    expect(sum(arr)).to.equal(3);
  });
  it("returns 0 for empty array", () => {
    const arr = [];

    expect(sum(arr)).to.equal(0);
  });
  it("works with array with 1 element", () => {
    const arr = [1];

    expect(sum(arr)).to.equal(1);
  });
});
