"use strict";

describe("Sort", function () {
  let array;

  beforeEach(function () {
    array = [1, 2, 6, 9, 3, 11, 24];
  });

  describe("sort", function () {
    it("sort elements in a given array", function () {
      expect(sort(array)).toEqual([1, 2, 3, 6, 9, 11, 24]);
    });
  });

  describe("myQuickSort", function () {
    it("sort elements in a given array", function () {
      expect(myQuickSort(array)).toEqual([1, 2, 3, 6, 9, 11, 24]);
    });
  });

  describe("myMergeSort", function () {
    it("sort elements in a given array", function () {
      expect(myMergeSort(array)).toEqual([1, 2, 3, 6, 9, 11, 24]);
    });
  });

  describe("mySelectionSort", function () {
    it("sort elements in a given array", function () {
      expect(mySelectionSort(array)).toEqual([1, 2, 3, 6, 9, 11, 24]);
    });
  });

  describe("myInsertionSort", function () {
    it("sort elements in a given array", function () {
      expect(myInsertionSort(array)).toEqual([1, 2, 3, 6, 9, 11, 24]);
    });
  });
});
