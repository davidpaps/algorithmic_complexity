"use strict";

describe("SortZeroOne", function () {
  let array;

  beforeEach(function () {
    array = [0, 1, 1, 0, 0, 1, 0, 0];
  });

  describe("sortZeroOne", function () {
    it("sort 0's and 1's in a given array", function () {
      expect(sortZeroOne(array)).toEqual([0, 0, 0, 0, 0, 1, 1, 1]);
    });
  });

  describe("mySortZeroOne", function () {
    it("sort 0's and 1's in a given array", function () {
      expect(mySortZeroOne(array)).toEqual([0, 0, 0, 0, 0, 1, 1, 1]);
    });
  });
});
