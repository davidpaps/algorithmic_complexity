"use strict";

describe("Timing", function () {
  let timing;

  beforeEach(function () {
    timing = new Timing(reverse);
  });

  describe("runNumbers", function () {
    it("to take in inputs and create an array with that length of numbers", function () {
      timing.runNumbers(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("runZeroOne", function () {
    it("to take in inputs and create an array with that length of 0's and 1's", function () {
      timing.runZeroOne(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("runWords", function () {
    it("to take in inputs and create an array with that length of words", function () {
      timing.runWords(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time.toFixed(0)).toEqual("0");
    });
  });

  describe("runFibonacci", function () {
    it("to take in inputs and create an array with that length of words", function () {
      let t = new Timing(fibonacci);
      t.runFibonacci(1000, 100);
      expect(t.times.length).toEqual(10);
      expect(t.times[0].inputSize).toEqual(0);
      expect(t.times[0].time.toFixed(0)).toEqual("0");
    });
  });
});
