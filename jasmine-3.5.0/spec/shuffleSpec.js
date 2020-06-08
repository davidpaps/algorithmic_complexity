"use strict";

describe("Shuffle", function () {
  let array;

  beforeEach(function () {
    array = [1, 2, 3, 4, 5];
  });

  describe("shuffle", function () {
    it("sort 0's and 1's in a given array", function () {
      expect(shuffle(array)).not.toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("myShuffle", function () {
    it("sort 0's and 1's in a given array", function () {
      expect(myShuffle(array)).not.toEqual([1, 2, 3, 4, 5]);
    });
  });
});
