"use strict";

describe("Timing", function () {
  let timing;

  beforeEach(function () {
    timing = new Timing(reverse);
  });

  describe("run", function () {
    it("to take in inputs and create an array with that length", function () {
      timing.run(1000, 100);
      expect(timing.times.length).toEqual(10);
      expect(timing.times[0].inputSize).toEqual(0);
      expect(timing.times[0].time).toEqual(0);
    });
  });
});
