"use strict";

describe("Last", function () {
  let array;

  beforeEach(function () {
    array = [1, 2, 3, 4, 5];
  });

  describe("last", function () {
    it("return the last element in a given array", function () {
      expect(last(array)).toEqual(5);
    });
  });

  describe("myLast", function () {
    it("return the last element in a given array", function () {
      expect(myLast(array)).toEqual(5);
    });
  });
});
