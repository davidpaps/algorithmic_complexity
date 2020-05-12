"use strict";

class Timing {
  constructor() {
    this.reverseTimes = [];
  }

  reverseFunction = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createArray(elements);
        let start = performance.now();
        array.reverse();
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.reverseTimes, elements, time);
      }
    }
  };

  _addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };

  _createArray = (inputSize) => {
    return [...Array(inputSize).keys()];
  };

  _sortArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
}
