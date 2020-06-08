"use strict";

describe("reverse", function () {
  let array;

  beforeEach(function () {
    array = [1, 2, 3, 4, 5];
  });

  describe("reverse", function () {
    it("reverses elements in a given array", function () {
      expect(reverse(array)).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe("myReverse", function () {
    it("reverses elements in a given array", function () {
      expect(myReverse(array)).toEqual([5, 4, 3, 2, 1]);
    });
  });
});
