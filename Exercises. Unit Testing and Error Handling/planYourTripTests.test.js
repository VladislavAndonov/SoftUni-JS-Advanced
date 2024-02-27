import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe("choosingDestination functionality", function () {
  it("should throw an error for invalid year", function () {
    expect(() =>
      planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)
    ).to.throw("Invalid Year!");
  });
  it("should throw an error for invalid destination", function () {
    expect(() =>
      planYourTrip.choosingDestination("asd", "Winter", 2024)
    ).to.throw("This destination is not what you are looking for.");
  });
  it("should work fine with valid inputs", function () {
    expect(
      planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)
    ).to.equal(
      `Great choice! The Winter is the perfect time to visit the Ski Resort.`
    );
  });

  it("should advice to visit the destination at the right season", function () {
    expect(
      planYourTrip.choosingDestination("Ski Resort", "asd", 2024)
    ).to.equal(
      `Consider visiting during the Winter for the best experience at the Ski Resort.`
    );
  });

  describe("exploreOptions functionality", function () {
    it("should remove the activity at given index", function () {
      expect(
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          0
        )
      ).to.equal("Snowboarding, Winter Hiking");
    });
    it("should throw an error for non-array param", function () {
      expect(() => planYourTrip.exploreOptions("asd", 0)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.exploreOptions(1, 0)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.exploreOptions({ asd: 1 }, 0)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.exploreOptions(true, 0)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw an error for non-number index", function () {
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          "asd"
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          true
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          { asd: 1 }
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          [1, 2, 3]
        )
      ).to.throw("Invalid Information!");
    });
    it("should throw an error for non-integer", function () {
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          3.14
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          1.33
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          0.666
        )
      ).to.throw("Invalid Information!");
    });
    it("should throw an error for index outside of limits", function () {
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          8
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          42
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          -2
        )
      ).to.throw("Invalid Information!");
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          -11
        )
      ).to.throw("Invalid Information!");
    });
  });
  describe("estimateExpenses functionality", function () {
    it("calculate the cost of the travel and if it is lower than $500, should return budget-friendy trip", function () {
      expect(planYourTrip.estimateExpenses(100, 3)).to.equal(
        "The trip is budget-friendly, estimated cost is $300.00."
      );
      expect(planYourTrip.estimateExpenses(150, 3)).to.equal(
        "The trip is budget-friendly, estimated cost is $450.00."
      );
      expect(planYourTrip.estimateExpenses(100, 2.5)).to.equal(
        "The trip is budget-friendly, estimated cost is $250.00."
      );
    });
    it("calculate the cost of the travel and if cost is more than $500 , should return plan accordingly", function () {
      expect(planYourTrip.estimateExpenses(300, 3)).to.equal(
        "The estimated cost for the trip is $900.00, plan accordingly."
      );
      expect(planYourTrip.estimateExpenses(150, 5)).to.equal(
        "The estimated cost for the trip is $750.00, plan accordingly."
      );
      expect(planYourTrip.estimateExpenses(500, 2.5)).to.equal(
        "The estimated cost for the trip is $1250.00, plan accordingly."
      );
    });

    it("should throw an error for a non-number distanceInKilometers", function () {
      expect(() => planYourTrip.estimateExpenses("asd", 3)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses([1, 2, 3], 3)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses({ asd: 1 }, 3)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw error for a non-number fuelCostPerLiter", function () {
      expect(() => planYourTrip.estimateExpenses(100, "asd")).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(100, [1, 2, 3])).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(100, true)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw error for negative distanceInKilometers", function () {
      expect(() => planYourTrip.estimateExpenses(-100, 3)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(-200, 2)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(-150, 2)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw an error for negative fuelCostPerLiter", function () {
      expect(() => planYourTrip.estimateExpenses(100, -2)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw an error if distanceInKilometers == 0", function () {
      expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(0, 2.5)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw an error if fuelCostPerLiter == 0", function () {
      expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw(
        "Invalid Information!"
      );
      expect(() => planYourTrip.estimateExpenses(500, 0)).to.throw(
        "Invalid Information!"
      );
    });
  });
});
