import { expect } from "chai";
import { mathEnforcer } from "./04-mathEnforcer.js";

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("should return undefined for non-number param", () => {
      expect(mathEnforcer.addFive("aaa")).to.equal(undefined);
      expect(mathEnforcer.addFive([1, 2, 3])).to.equal(undefined);
      expect(mathEnforcer.addFive(true)).to.equal(undefined);
      expect(mathEnforcer.addFive({ key: "value" })).to.equal(undefined);
    });
    it("should work properly for number param", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-2)).to.equal(3);
      expect(mathEnforcer.addFive(3.14)).to.equal(8.14);
      expect(mathEnforcer.addFive(0)).to.equal(5);
    });
  });
  describe("subtractTen", () => {
    it("should return undefined for non-number param", () => {
      expect(mathEnforcer.subtractTen("bbb")).to.equal(undefined);
      expect(mathEnforcer.subtractTen([1, 2, 3])).to.equal(undefined);
      expect(mathEnforcer.subtractTen(false)).to.equal(undefined);
      expect(mathEnforcer.subtractTen({ key: "value" })).to.equal(undefined);
    });
    it("should work properly for number param", () => {
      expect(mathEnforcer.subtractTen(33)).to.equal(23);
      expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
      expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
      expect(mathEnforcer.subtractTen(0)).to.equal(-10);
    });
    describe("sum", () => {
      it("should return undefined for non-number first param ", () => {
        expect(mathEnforcer.sum("aaa", 1)).to.equal(undefined);
        expect(mathEnforcer.sum([1, 2, 3], 1)).to.equal(undefined);
        expect(mathEnforcer.sum(true, 1)).to.equal(undefined);
        expect(mathEnforcer.sum({ key: "value" }, 1)).to.equal(undefined);
      });
      it("should return undefined for non-number second param", () => {
        expect(mathEnforcer.sum(1, "bbb")).to.equal(undefined);
        expect(mathEnforcer.sum(1, [4, 5, 6])).to.equal(undefined);
        expect(mathEnforcer.sum(1, false)).to.equal(undefined);
        expect(mathEnforcer.sum(1, { key: "value" })).to.equal(undefined);
      });
      it("should work properly for both params are numbers", () => {
        expect(mathEnforcer.sum(4, 7)).to.equal(11);
        expect(mathEnforcer.sum(14, 3.14)).to.be.closeTo(17, 14, 0.01);
        expect(mathEnforcer.sum(1.33, 3.14)).to.be.closeTo(4.47, 0.01);
        expect(mathEnforcer.sum(-5, 3)).to.equal(-2);
        expect(mathEnforcer.sum(-12, -13)).to.equal(-25);
        expect(mathEnforcer.sum(0, 7)).to.equal(7);
      });
    });
  });
});
