"use strict";

class Timing {
  constructor() {
    this.reverseTimes = [];
  }

  reverseFunction = (inputSize) => {
    let array = [...Array(inputSize).keys()];
    let start = performance.now();
    array.reverse();
    let end = performance.now();
    let time = end - start;
    this.addTimes(this.reverseTimes, inputSize, time);
  };

  addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };
}
