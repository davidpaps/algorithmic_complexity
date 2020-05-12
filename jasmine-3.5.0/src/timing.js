"use strict";

class Timing {
  constructor() {
    this.reverseTimes = [];
  }

  reverseFunction = (inputSize, step) => {
    let array = [...Array(inputSize).keys()];
    let start = performance.now();
    array.reverse();
    let end = performance.now();
    let time = end - start;

    for (let elements = 0; elements < inputSize; elements++) {
      if (elements % step === 0) {
        this._addTimes(this.reverseTimes, elements, time);
      }
    }
  };

  _addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };
}
