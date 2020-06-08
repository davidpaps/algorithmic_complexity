"use strict";

describe("Timing", function () {
  let timing;

  beforeEach(function () {
    timing = new Timing(reverse);
  });

  describe("runNumbers", function () {
    it("runs the timing framework for algorithms using number arrays", function () {
      timing.runNumbers(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("runZeroOne", function () {
    it("runs the timing framework for Fibonacci algorithms", function () {
      timing.runZeroOne(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("runWords", function () {
    it("runs the timing framework for Fibonacci algorithms", function () {
      timing.runWords(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("runFibonacci", function () {
    it("runs the timing framework for Fibonacci algorithms", function () {
      let t = new Timing(fibonacci);
      t.runFibonacci(1000, 100);
      expect(t.times.length).toEqual(10);
      expect(t.times[0].inputSize).toEqual(0);
      expect(t.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("_createWordArray", function () {
    it("creates a word array with a length of 20", function () {
      expect(timing._createWordArray(2).length).toEqual(20);
      expect(timing._createWordArray(2)).toEqual([
        "a",
        "b",
        "c",
        "a",
        "d",
        "e",
        "b",
        "f",
        "g",
        "b",
        "a",
        "b",
        "c",
        "a",
        "d",
        "e",
        "b",
        "f",
        "g",
        "b",
      ]);
    });
  });

  describe("_createZeroOneArray", function () {
    it("creates a 0/1 array with a length of 12", function () {
      expect(timing._createZeroOneArray(12).length).toEqual(12);
      expect(timing._createZeroOneArray(12)).toEqual([
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
      ]);
    });
  });

  describe("_createNumberArray", function () {
    it("creates a number array with a length of 10", function () {
      expect(timing._createNumberArray(10).length).toEqual(10);
      expect(timing._createNumberArray(10)).toEqual([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ]);
    });
  });

  describe("_shuffleArray", function () {
    it("shuffles an array", function () {
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(timing._shuffleArray(array)).not.toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ]);
    });
  });

  describe("_duplicateArray", function () {
    it("duplicates an array", function () {
      let t = new Timing(duplicate);
      let array = [0, 1, 2, 3];
      expect(t._duplicateArray(array)).toEqual([0, 1, 2, 3, 0, 1, 2, 3]);
    });
  });
});
