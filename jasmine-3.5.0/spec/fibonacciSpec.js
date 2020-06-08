"use strict";

describe("Fibonacci", function () {
  describe("fibonacci", function () {
    it("Prints the first 10 number of numbers in the Fibonacci sequence", function () {
      expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
  });

  describe("myQuickFibonacci", function () {
    it("Prints the first 10 number of numbers in the Fibonacci sequence", function () {
      expect(myFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
  });
});
