"use strict";

describe("Shuffle", function () {
  let array;

  beforeEach(function () {
    array = [1, 2, 3, 4, 5];
  });

  describe("shuffle", function () {
    it("shuffle elements in a given array", function () {
      expect(shuffle(array)).not.toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("myShuffle", function () {
    it("shuffle elements in a given array", function () {
      expect(myShuffle(array)).not.toEqual([1, 2, 3, 4, 5]);
    });
  });
});
