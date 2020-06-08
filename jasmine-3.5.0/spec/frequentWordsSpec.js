"use strict";

describe("FrequentWords", function () {
  let array;

  beforeEach(function () {
    array = ["a", "b", "c", "a", "b", "d", "e", "c"];
  });

  describe("frequentWords", function () {
    it(" a given array", function () {
      expect(frequentWords(array)).toEqual(["a", "b", "c"]);
    });
  });

  describe("myFrequentWords", function () {
    it(" a given array", function () {
      expect(myFrequentWords(array)).toEqual(["a", "b", "c"]);
    });
  });
});
