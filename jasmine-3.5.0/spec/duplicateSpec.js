"use strict";

describe("Duplicate", function () {
  let array;

  beforeEach(function () {
    array = [1, 2, 2, 2, 3, 4, 5, 5];
  });

  describe("duplicate", function () {
    it("remove duplicates from in a given array", function () {
      expect(duplicate(array)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("myDuplicate", function () {
    it("returns duplicates from in a given array", function () {
      expect(myDuplicate(array)).toEqual([2, 5]);
    });
  });
});
